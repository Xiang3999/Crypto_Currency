import scrypt, secrets

a_string = b'scrypt is a memory hard hash function. It is most widely used as an alternative bitcoin puzzle'

salt = secrets.token_bytes(32)

scrypt_key = scrypt.hash(a_string, salt, N=65536, r=8, p=1)

print('Salt: ', salt)
print('Key: ', scrypt_key)