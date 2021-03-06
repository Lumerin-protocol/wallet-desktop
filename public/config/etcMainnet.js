'use strict';

const LumerinContracts = require('metronome-contracts');
const contracts = LumerinContracts['classic'];

module.exports = {
  displayName: 'Ethereum Classic',
  chainId: 61,
  symbol: 'ETC',

  // contracts addresses
  tokenPorterAddress: contracts.TokenPorter.address,
  converterAddress: contracts.AutonomousConverter.address,
  validatorAddress: contracts.Validator.address,
  lmrTokenAddress: contracts.METToken.address,
  auctionAddress: contracts.Auctions.address,

  // urls
  explorerUrl: 'https://blockscout.com/etc/mainnet/tx/{{hash}}/internal_transactions',
  indexerUrl: 'https://etc.indexer.metronome.io',
  wsApiUrl: 'wss://etc.wallet.metronome.io:8546',

  // defauls
  coinDefaultGasLimit: '21000',
  lmrDefaultGasLimit: '250000',
  defaultGasPrice: '10000000000',
  maxGasPrice: '200000000000000000'
};
