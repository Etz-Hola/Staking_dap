require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
    },
    celoTestnet: {
      url: process.env.CELO_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
