require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`14face90ef5fe6ae7b5fa959ef5634004c5eca2fadaca1628336414e107d74ef`],
    },
  },
};
