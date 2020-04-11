# encoding=utf8
from Crypto import Random
import Crypto.Util.Counter
from Crypto.Cipher import DES
from Crypto.PublicKey import RSA


def rsa(msg):
    print('##### RSA Method ##### ')
    key = RSA.generate(2048)

    binPrivKey = key.exportKey('DER')
    binPubKey =  key.publickey().exportKey('DER')

    privKeyObj = RSA.importKey(binPrivKey)
    pubKeyObj =  RSA.importKey(binPubKey)

    emsg = pubKeyObj.encrypt(msg, 'x')[0]
    dmsg = privKeyObj.decrypt(emsg)


    print(privKeyObj.exportKey().decode('ascii'))
    print(pubKeyObj.exportKey().decode('ascii'))
    print('Message to be encrypted: ' + msg.decode('ascii'))
    print('Encrypted message: ',  emsg)
    print('Decrypted message using RSA: ' + dmsg.decode('ascii'))


def des(msg):
    print('\n##### DES Method ##### ')
    key = b'-8B key-'
    nonce = Random.new().read(int(DES.block_size/2))
    ctr = Crypto.Util.Counter.new(int(DES.block_size*8/2), prefix=nonce)
    cipher = DES.new(key, DES.MODE_CTR, counter=ctr)
    emsg = cipher.encrypt(msg)
    ctr = Crypto.Util.Counter.new(int(DES.block_size * 8 / 2), prefix=nonce)
    cipher_decrypt = DES.new(key, DES.MODE_CTR, counter=ctr)
    print('DES key: ' + key.decode('ascii'))
    print('Message to be encrypted: ' + msg.decode('ascii'))
    print('Encrypted message: ', emsg)
    print('Decrypted message using DES: '+ cipher_decrypt.decrypt(emsg).decode('ascii'))


msg = b"This is fun"
rsa(msg)
des(msg)
