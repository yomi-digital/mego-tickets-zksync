# MEGO Tickets x zkSync

This contract is the official MEGO tickets (https://mego.cx) contract to issue NFT tickets. 
You need some ETH on zkSync testnet era to proceed with deployment, follow official docs for detailed instructions: https://era.zksync.io/docs.

## Prepare the environment

Create a `.env` file and insert a private key that contains some bridged gETH:

```
DEPLOYER_KEY=<YOUR_KEY>
```

## Compile contract

```
yarn compile
```

## Deploy contract

```
yarn deploy
```

This will return something like:
```
Running deploy script..
MegoTicketsPublic was deployed to 0x9b2aA2C91EAFD4e5Caf0381338144591CAD264f2
```

## Verify contract

```
yarn hardhat verify --network zkTestnet <YOUR_CONTRACT_ADDRESS_HERE> "MEGO TICKETS" "MTK"
```

You can now see the deployment here and interact with it via browser: https://goerli.explorer.zksync.io/address/0x9b2aA2C91EAFD4e5Caf0381338144591CAD264f2