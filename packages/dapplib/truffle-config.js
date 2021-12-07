require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain unknown guess entire oppose tell'; 
let testAccounts = [
"0x3748730a9cc96d0ce2f8a3527531b92daf689fe371b5bb5fe29226b19a4bef4d",
"0xea1451202dd886f376dd1f76d1624ea12f30ae43191e2ec8b236318fc2dd18f4",
"0x6c511b27b19b10a92f854299fbe28e1b30b1165592bc4098c3383005d58600d8",
"0xa2468074de467ef760318a47ede885288337036e2acddb7ac926314118c49773",
"0xa34250c42cd01ab0ddba632b66ecb90e9ffb5335a7154a2afd62c14942a4984f",
"0x5498ef100a0af2602d9eadbd75535553fcdb1edf00542d9256f9fd5a0d277785",
"0x6c2f5e5f1d47c6f323ccdc4b626a6ed86f183f28a0c92703263d5b497633bb1c",
"0x2648af218599a9a2b4be6660439bd35af48b29e0e7ce53a964c2677ffa103f89",
"0x714a539ebbd98d721e95325b7ea6ff011b6f8b47a1701a221a013238997528d9",
"0xcd63dea1d1a83d08a064c2a3a6b62ebaaa2214776df5325463a01976a3f6b445"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

