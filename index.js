var Web3 = require('web3');

// "Web3.givenProvider" will be set if in an Ethereum supported browser.
var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

console.log("web3.eth")
console.log(web3.eth)
console.log("web3.shh")
console.log(web3.shh)
console.log("web3.bzz")
console.log(web3.bzz)
console.log("web3.utils")
console.log(web3.utils)
console.log("web3.version")
console.log(web3.version)



