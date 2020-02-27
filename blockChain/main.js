const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const m1Key = ec.keyFromPrivate('ba79c4ba6496277f0962c8041c9983b5cf9861934f9b37ad47d0cb110678f52c');
const m2Key = ec.keyFromPrivate('4e61543508d9b20f75fbc8d18b4b9ac7d2ee16bba6237bd1f6ef903138b77af5');
const c1Key = ec.keyFromPrivate('92b0628d411bbcc4957758a90f8848a6f3e60866c8e8ec04c3814c906561f540');
const c2Key = ec.keyFromPrivate('cbc5bcbe325edb45ff43bc0422d64afc14f8e977e2307b4733b5a98cee17e3d3');
const c3Key = ec.keyFromPrivate('8769062d5a26785ee2ac63d8ce97ec8bea270726c7b7e726908605c47b397a98');
const c4Key = ec.keyFromPrivate('fb82a5149fd9f1149d5931f6c613230430bae8deb678df993851cb6a33d53ee1');
const c5Key = ec.keyFromPrivate('c81d723550da9648d031ae9344f72f7cb58e93981bbfae5b275b6886a51b37a3');
const smKey = ec.keyFromPrivate('14c84513562d13a100be9344379680d9ca6932268144872b472866f7aa0c7905');

const m1Wallet = m1Key.getPublic('hex');
const m2Wallet = m2Key.getPublic('hex');
const c1Wallet = c1Key.getPublic('hex');
const c2Wallet = c2Key.getPublic('hex');
const c3Wallet = c3Key.getPublic('hex');
const c4Wallet = c4Key.getPublic('hex');
const c5Wallet = c5Key.getPublic('hex');

let singleMiner = new Blockchain();

//Generate 25 random transactions using the above transaction format
const transaction1 = new Transaction(c1Wallet, m1Wallet, 50, Date.now());
transaction1.signTransaction(c1Key);
singleMiner.addTransaction(transaction1);
singleMiner.minePendingTransactions(c1Wallet);

const transaction2 = new Transaction(c2Wallet, m1Wallet, 100, Date.now());
transaction2.signTransaction(c2Key);
singleMiner.addTransaction(transaction2);
singleMiner.minePendingTransactions(c2Wallet);

const transaction3 = new Transaction(c2Wallet, m1Wallet, 300, Date.now());
transaction3.signTransaction(c2Key);
singleMiner.addTransaction(transaction3);
singleMiner.minePendingTransactions(c2Wallet);

const transaction4 = new Transaction(c4Wallet, m2Wallet, 10, Date.now());
transaction4.signTransaction(c4Key);
singleMiner.addTransaction(transaction4);
singleMiner.minePendingTransactions(c4Wallet);

const transaction5 = new Transaction(c2Wallet, m1Wallet, 90, Date.now());
transaction5.signTransaction(c2Key);
singleMiner.addTransaction(transaction5);
singleMiner.minePendingTransactions(c2Wallet);

const transaction6 = new Transaction(c1Wallet, m1Wallet, 250, Date.now());
transaction6.signTransaction(c1Key);
singleMiner.addTransaction(transaction6);
singleMiner.minePendingTransactions(c1Wallet);

const transaction7 = new Transaction(c4Wallet, m1Wallet, 45, Date.now());
transaction7.signTransaction(c4Key);
singleMiner.addTransaction(transaction7);
singleMiner.minePendingTransactions(c4Wallet);

const transaction8 = new Transaction(c5Wallet, m1Wallet, 99.99, Date.now());
transaction8.signTransaction(c5Key);
singleMiner.addTransaction(transaction8);
singleMiner.minePendingTransactions(c5Wallet);

const transaction9 = new Transaction(c3Wallet, m2Wallet, 29, Date.now());
transaction9.signTransaction(c3Key);
singleMiner.addTransaction(transaction9);
singleMiner.minePendingTransactions(c3Wallet);

const transaction10 = new Transaction(c3Wallet, m2Wallet, 49, Date.now());
transaction10.signTransaction(c3Key);
singleMiner.addTransaction(transaction10);
singleMiner.minePendingTransactions(c3Wallet);

const transaction11 = new Transaction(c5Wallet, m1Wallet, 69, Date.now());
transaction11.signTransaction(c5Key);
singleMiner.addTransaction(transaction11);
singleMiner.minePendingTransactions(c5Wallet);

const transaction12 = new Transaction(c5Wallet, m1Wallet, 78, Date.now());
transaction12.signTransaction(c5Key);
singleMiner.addTransaction(transaction12);
singleMiner.minePendingTransactions(c5Wallet);

const transaction13 = new Transaction(c1Wallet, m2Wallet, 69, Date.now());
transaction13.signTransaction(c1Key);
singleMiner.addTransaction(transaction13);
singleMiner.minePendingTransactions(c1Wallet);

const transaction14 = new Transaction(c4Wallet, m2Wallet, 44, Date.now());
transaction14.signTransaction(c4Key);
singleMiner.addTransaction(transaction14);
singleMiner.minePendingTransactions(c4Wallet);

const transaction15 = new Transaction(c1Wallet, m1Wallet, 325.25, Date.now());
transaction15.signTransaction(c1Key);
singleMiner.addTransaction(transaction15);
singleMiner.minePendingTransactions(c1Wallet);

const transaction16 = new Transaction(c1Wallet, m1Wallet, 250.99, Date.now());
transaction16.signTransaction(c1Key);
singleMiner.addTransaction(transaction16);
singleMiner.minePendingTransactions(c1Wallet);

const transaction17 = new Transaction(c3Wallet, m1Wallet, 40, Date.now());
transaction17.signTransaction(c3Key);
singleMiner.addTransaction(transaction17);
singleMiner.minePendingTransactions(c3Wallet);

const transaction18 = new Transaction(c1Wallet, m1Wallet, 5, Date.now());
transaction18.signTransaction(c1Key);
singleMiner.addTransaction(transaction18);
singleMiner.minePendingTransactions(c1Wallet);

const transaction19 = new Transaction(c4Wallet, m1Wallet, 10.10, Date.now());
transaction19.signTransaction(c4Key);
singleMiner.addTransaction(transaction19);
singleMiner.minePendingTransactions(c4Wallet);

const transaction20 = new Transaction(c3Wallet, m2Wallet, 900, Date.now());
transaction20.signTransaction(c3Key);
singleMiner.addTransaction(transaction20);
singleMiner.minePendingTransactions(c3Wallet);

const transaction21 = new Transaction(c2Wallet, m1Wallet, 210, Date.now());
transaction21.signTransaction(c2Key);
singleMiner.addTransaction(transaction21);
singleMiner.minePendingTransactions(c2Wallet);

const transaction22 = new Transaction(c2Wallet, m2Wallet, 178, Date.now());
transaction22.signTransaction(c2Key);
singleMiner.addTransaction(transaction22);
singleMiner.minePendingTransactions(c2Wallet);

const transaction23 = new Transaction(c1Wallet, m1Wallet, 49, Date.now());
transaction23.signTransaction(c1Key);
singleMiner.addTransaction(transaction23);
singleMiner.minePendingTransactions(c1Wallet);

const transaction24 = new Transaction(c4Wallet, m1Wallet, 5.29, Date.now());
transaction24.signTransaction(c4Key);
singleMiner.addTransaction(transaction24);
singleMiner.minePendingTransactions(c4Wallet);

const transaction25 = new Transaction(c5Wallet, m2Wallet, 190, Date.now());
transaction25.signTransaction(c5Key);
singleMiner.addTransaction(transaction25);
singleMiner.minePendingTransactions(c5Wallet);


/*Increment the amount in transaction (in block 10) by $10.00, and show how it can be
detected by the customer
console.log('\n       --------------------------------------')
console.log('Increment the amount in transaction (in block 10) by $10.00\n');
singleMiner.chain[10].transactions[1].amount += 10; 
console.log('Blockchain valid?', singleMiner.isChainValid() ? 'Yes' : 'No');

List all transactions for customer 3 (C3)
console.log('\n--------------------------------------')
console.log('\nList all transactions for customer 3 (C3)\n');
for (let i = 0;  i < singleMiner.chain.length; i++){
    for(let j = 0; j < singleMiner.chain[i].transactions.length; j++){
        if (singleMiner.chain[i].transactions[j].clientPubicKey === c3Wallet){
            console.log(singleMiner.chain[i].transactions[j])
            } 
    }
}

all transactions for merchant 2 (M2)
console.log('\n--------------------------------------')
console.log('\nList all transactions for merchant 2 (M2)\n');
for (let i = 0;  i < singleMiner.chain.length; i++){
    for(let j = 0; j < singleMiner.chain[i].transactions.length; j++){
        if (singleMiner.chain[i].transactions[j].merchantPubicKey === m2Wallet){
            console.log(singleMiner.chain[i].transactions[j])
            } 
    }
}
*/