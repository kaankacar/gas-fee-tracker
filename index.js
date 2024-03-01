const { formatDate } = require('./dependents/utils');
const web3 = require('web3');
require('dotenv').config();
const axios = require('axios');
const Web3 = require('web3'); // Import Web3
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


const getGasUsedByAddress = async (address) => {
  try {
    // Validate Ethereum address
    if (!web3.utils.isAddress(address)) {
      console.log('Invalid Ethereum address.');
      return;
    }

    const apiKey = process.env.ETHERSCAN_API_KEY;
    const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${apiKey}`;
    
    const response = await axios.get(url);
    const transactions = response.data.result;

    if (!transactions || transactions.length === 0) {
      console.log('No transactions found for this address.');
      return;
    }

    let totalGasUsed = transactions.reduce((acc, transaction) => acc + parseInt(transaction.gasUsed), 0);
    console.log(`Total Gas Used by ${address}: ${totalGasUsed}`);
    console.log(`Date of first transaction: ${formatDate(transactions[0].timeStamp)}`);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

readline.question('Please enter your wallet address: ', address => {
  getGasUsedByAddress(address).then(() => readline.close());
});

module.exports = { getGasUsedByAddress };