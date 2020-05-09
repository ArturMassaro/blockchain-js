const Blockchain = require('./blockchain')

const blockchain = new Blockchain(5)
blockchain.addBlock({ amount: 4 })
console.log("Block inserted")


console.log(blockchain.isValid())
blockchain.blocks[1].data.amount = 3000
console.log(blockchain.isValid())