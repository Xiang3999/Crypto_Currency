const crypto = require('crypto');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const SHA256 = require('crypto-js/sha256');

class Transaction{
    constructor(clientPubicKey, merchantPubicKey, amount, timestamp){
        this.clientPubicKey = clientPubicKey;
        this.merchantPubicKey = merchantPubicKey;
        this.amount = amount;
        this.timestamp = timestamp;
    }

    calculateHash(){
        return SHA256(this.clientPubicKey, this.merchantPubicKey, this.amount, this.timestamp).toString();
    }

    signTransaction(signingKey){
        if(signingKey.getPublic('hex') !== this.clientPubicKey){
            throw new Error('Unable to sign the transaction from other wallets!');
        }
        const hashTx = this.calculateHash();
        const sig = signingKey.sign(hashTx, 'base64');
        this.signature = sig.toDER('hex');
    }

    isValid(){
        if(this.clientPubicKey === null) return true;

        if(!this.signature || this.signature.length ===0){
            throw new Error('No signature in this transaction');
        }

        const publicKey = ec.keyFromPublic(this.clientPubicKey, 'hex');
        return publicKey.verify(this.calculateHash(), this.signature);
    }
}

class Block{
    constructor(transactions, previouHash = ''){
        this.transactions = transactions;
        this.previouHash = previouHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash(){
        return SHA256(this.previouHash + this.nonce + this.index + this.timestamp + JSON.stringify(this.transactions)).toString();

    }

    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty +1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Block mined: " + this.hash);
    }

    hasValidTransactions(){
        for(const tx of this.transactions){
            if(!tx.isValid()){
                return false;
            }
        }
        return true;
    }
}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 10;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock(){
        return new Block("Genesis Block", "0");
    }

    getLastestBlock(){
        return this.chain[this.chain.length - 1];
    }

    minePendingTransactions(miningRewardAddress){
        const rewardTx = new Transaction(null, miningRewardAddress, this.miningReward);
        this.pendingTransactions.push(rewardTx);
        const block = new Block(this.pendingTransactions, this.getLastestBlock().hash);
        block.mineBlock(this.difficulty);
        this.chain.push(block);
        this.pendingTransactions = [];
    }

    addTransaction(transaction){
        if(!transaction.clientPubicKey  || !transaction.merchantPubicKey){
            throw new Error('Transaction must include client pubic key and merchant pubic key');
        }

        if(!transaction.isValid()){
            throw new Error('Cannot add invalid transaction to chain');
        }

        this.pendingTransactions.push(transaction);
        console.log('Client publicKey: ', transaction.clientPubicKey);
        console.log('Merchant publicKey: ', transaction.merchantPubicKey);
        console.log('Transaction date: ', Date(transaction.timestamp.toString()));
        console.log('Transaction amount: ', transaction.amount.toFixed(2), '\n');
    }

    getBalanceOfAddress(address){
        let balance = 0;

        for(const block of this.chain){
            for(const trans of block.transactions){
                if(trans.clientPubicKey === address){
                    balance -= trans.amount;
                }

                if(trans.merchantPubicKey === address){
                    balance += trans.amount;
                }
            }
        }
        return balance;
    }

    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if(!currentBlock.hasValidTransactions()){
                return false;
            }

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previouHash !== previousBlock.hash){
                return false;
            }
        }

        return true;
    }
}

module.exports.Blockchain = Blockchain;
module.exports.Block = Block;
module.exports.Transaction = Transaction;