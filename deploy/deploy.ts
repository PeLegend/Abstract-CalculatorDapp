import { utils, Wallet } from "zksync-ethers";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync";
 
// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script`);
 
  // Initialize the wallet.
  const wallet = new Wallet(<YOUR PRIVATE KEY>); // Replace this with your deployment wallet's private key
 
  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  // Load contract
  const artifact = await deployer.loadArtifact("Calculator");
 
  // Deploy this contract. The returned object will be of a `Contract` type,
  // similar to the ones in `ethers`.
  const tokenCountract = await deployer.deploy(artifact);
 
  // Show the contract info.
  console.log(`${artifact.contractName} was deployed to ${await tokenCountract.getAddress()}`);
}