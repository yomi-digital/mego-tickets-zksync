import { utils, Wallet } from "zksync-web3";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
require('dotenv').config()
const fs = require('fs')

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
    if (process?.env?.DEPLOYER_KEY !== undefined) {
        console.log(`Running deploy script..`);

        // Initialize the wallet.
        const wallet = new Wallet(process.env.DEPLOYER_KEY);

        // Create deployer object and load the artifact of the contract we want to deploy.
        const deployer = new Deployer(hre, wallet);
        const artifact = await deployer.loadArtifact("MegoTicketsPublic");

        // Deploy this contract. 
        const contract = await deployer.deploy(artifact, ["MEGO TICKETS", "MTK"]);

        // Show the contract info.
        const contractAddress = contract.address;
        console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
    } else {
        console.log("Can't find DEPLOYER_KEY in .env file")
    }
}