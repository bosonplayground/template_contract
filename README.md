# Template Contract

## Prerequisite

```
npm install
```

Be sure you've defined an ./.env file with the 'MNEMONIC' environment variable.
See ./.env.example for more details.

## Tests
```
npm run test
```

## Deployment
```
npm run deploy -- --network <network>
```
Where network is:
* ganache,
* mainnet,
* rinkeby,
* ...
(see list of networks in ./hardhat.config.js, complete it if necessary)

Be sure the 'MNEMONIC' environment variable is compliant with the account used to deploy, and you have funds to pay the gas fees.