# Gas Usage Tracker

This project allows users to input a wallet address and retrieves the total gas used by transactions associated with that address from the Ethereum blockchain, using the Etherscan API. It validates Ethereum addresses using the `web3` library and queries transaction data with `axios`.

## Installation

Before running this project, make sure you have Node.js installed on your machine. Then, follow these steps to install the required dependencies:

1. Clone this repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the dependencies.

You will also need to set up an `.env` file in the root of your project directory with your Etherscan API key.


## Usage

To use this program, run the following command in your terminal from the root of the project directory:

`node index.js`