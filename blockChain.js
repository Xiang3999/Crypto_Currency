const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(id, timestamp, data, previouHash = ''){
        this.id = id;
        this.timestamp = timestamp;
        this.data = data;
        this.previouHash = previouHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.index + this.previouHash + this.timestamp + JSON.stringify(this.data)).toString();

    }
}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block(0, "00/00/0000", "Genesis Block", "0");
    }

    getLastestBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.previouHash = this.getLastestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

let node = new Blockchain();
node.addBlock(new Block(1, "10/25/2017", {amount: 1}));

console.log(JSON.stringify(node, null, 4));