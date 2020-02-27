const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

//Assume that you have 5 customers (C1-C5), 2 merchants (M1-M2), and a single miner (SM)
//Generate 2 public-key/private-key pairs representing 2 merchants
const keyM1 = ec.genKeyPair();
const publicKeyM1 = keyM1.getPublic('hex');
const privateKeyM1 = keyM1.getPrivate('hex');

const keyM2 = ec.genKeyPair();
const publicKeyM2 = keyM2.getPublic('hex');
const privateKeyM2 = keyM2.getPrivate('hex');

//Generate 5 public-key/private-key pairs representing 5 customers
const keyC1 = ec.genKeyPair();
const publicKeyC1 = keyC1.getPublic('hex');
const privateKeyC1 = keyC1.getPrivate('hex');

const keyC2 = ec.genKeyPair();
const publicKeyC2 = keyC2.getPublic('hex');
const privateKeyC2 = keyC2.getPrivate('hex');

const keyC3 = ec.genKeyPair();
const publicKeyC3 = keyC3.getPublic('hex');
const privateKeyC3 = keyC3.getPrivate('hex');

const keyC4 = ec.genKeyPair();
const publicKeyC4 = keyC4.getPublic('hex');
const privateKeyC4 = keyC4.getPrivate('hex');

const keyC5 = ec.genKeyPair();
const publicKeyC5 = keyC5.getPublic('hex');
const privateKeyC5 = keyC5.getPrivate('hex');

//Generate 1 public-key/private-key pair for the single miner
const keySM = ec.genKeyPair();
const publicKeySM = keySM.getPublic('hex');
const privateKeySM = keySM.getPrivate('hex');

console.log('Public key M1:', publicKeyM1);
console.log('Private key M1: ', privateKeyM1);
console.log();
console.log('Public key M2:', publicKeyM2);
console.log('Private key M2: ', privateKeyM2);
console.log();
console.log('Public key C1:', publicKeyC1);
console.log('Private key C1: ', privateKeyC1);
console.log();
console.log('Public key C2:', publicKeyC2);
console.log('Private key C2: ', privateKeyC2);
console.log();
console.log('Public key C3:', publicKeyC3);
console.log('Private key C3: ', privateKeyC3);
console.log();
console.log('Public key C4:', publicKeyC4);
console.log('Private key C4: ', privateKeyC4);
console.log();
console.log('Public key C5:', publicKeyC5);
console.log('Private key C5: ', privateKeyC5);
console.log();
console.log('Public key SM:', publicKeySM);
console.log('Private key SM: ', privateKeySM);