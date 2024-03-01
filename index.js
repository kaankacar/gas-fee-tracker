require('dotenv').config();
const axios = require('axios');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const getGasUsedByAddress = async (address) => {
  try {
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
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

readline.question('Please enter your wallet address: ', address => {
  getGasUsedByAddress(address).then(() => readline.close());
});
