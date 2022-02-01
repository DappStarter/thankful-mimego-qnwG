require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remember pudding hope clinic swift gather'; 
let testAccounts = [
"0xabc1058c0255b3ef4c88160f7e627ce3be15f7c0cc93f9166c6cac4f6ec6d95e",
"0x15202b5a05019c71fc11a45831e8539e844e04486cea4fc352780c7a12d0544b",
"0x83592d0b7671112c23fd15ef2a617eeb785bb356ee6c2533a922552a73997c0c",
"0x8d1d47add89dafcf60b832526b921e70408dffc68ca2f18a14f0f147d1f0b4b3",
"0x3a703c3f8c681ebb6b264b81014cae225890f2d4af71baf5b920ae0aec3de1c0",
"0xb922e7ed06afc3c2cedf3cc569997cd97ffc78fb61dbcead666956732e5b776d",
"0x90fa33ce0c64f2a46ac9778c5fe39196f7c9fb984d4437487861744091fce41c",
"0x7adbce33378100c036012925d2097194410686679e749a3fb52d6ddd2f7ddef4",
"0x932e7c64cde79a3269364867595ec2a184b05d1648cc5f93fdd23a63b4eb651a",
"0xe86f93d698d1a34a366ad7a2e51b9b4af23e89fd7f4d92a997b5ec15d3d0d821"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

