// scripts/interact.js

const hre = require("hardhat");

async function main() {
  // Compile the contract
  await hre.run('compile');

  const contractName = "OnRampContract"

  // Deploy the TransientStorageExample contract
  const ContractFactory = await hre.ethers.getContractFactory(contractName);
  const contract = await ContractFactory.deploy();
  await contract.deployed();

  console.log(`${contractName} deployed to address: ${contract.address}`);
}

// Run the main function
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});




const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
  const filecoinNetwork = hre.network.name === "calibnet";
  const linearNetwork = hre.network.name === "linea";
  const hederaNetwork = hre.network.name === "hedera";

  // Deploy source contract on Hedera with constructor arguments
  if (hederaNetwork) {
    console.log(`Deploying OnRampSource.sol on ${hre.network.name}...`);

    // Compile the contract
    await hre.run("compile");

    const sourceContractName = "OnRampSource";
    const SourceContractFactory = await hre.ethers.getContractFactory(sourceContractName);

    // Constructor arguments for OnRampSource (Linear)
    const axelarGatewayAddress = "0xB8Cd93C83A974649D76B1c19f311f639e62272BC"; 
    const axelarGasReceiver = "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6"; 

    // Pass constructor arguments during deployment
    const sourceContract = await SourceContractFactory.deploy(axelarGatewayAddress, axelarGasReceiver);
    await sourceContract.deployed();

    console.log(`${sourceContractName} deployed to address: ${sourceContract.address} on ${hre.network.name}`);

    // Optionally interact with Axelar Gateway or Gas Service here if required
  }

  // Deploy source contract on Linear with constructor arguments
  if (linearNetwork) {
    console.log(`Deploying OnRampSource.sol on ${hre.network.name}...`);

    // Compile the contract
    await hre.run("compile");

    const sourceContractName = "OnRampSource";
    const SourceContractFactory = await hre.ethers.getContractFactory(sourceContractName);

    // Constructor arguments for OnRampSource (Linear)
    const axelarGatewayAddress = "0xe432150cce91c13a887f7D836923d5597adD8E31"; // Linear Gateway Address
    const axelarGasReceiver = "0x1a920B29eBD437074225cAeE44f78FC700B27a5d"; // Linear Gas Service Address

    // Pass constructor arguments during deployment
    const sourceContract = await SourceContractFactory.deploy(axelarGatewayAddress, axelarGasReceiver);
    await sourceContract.deployed();

    console.log(`${sourceContractName} deployed to address: ${sourceContract.address} on ${hre.network.name}`);

    // Optionally interact with Axelar Gateway or Gas Service here if required
  }

  // Deploy destination contract on Filecoin with constructor arguments
  else if (filecoinNetwork) {
    console.log(`Deploying OnRampDestination.sol on ${hre.network.name}...`);

    // Compile the contract
    await hre.run("compile");

    const destinationContractName = "OnRampDestination";
    const DestinationContractFactory = await hre.ethers.getContractFactory(destinationContractName);

    // Constructor arguments for OnRampDestination (Filecoin)
    const axelarGatewayAddress = "0x999117D44220F33e0441fbAb2A5aDB8FF485c54D"; // Filecoin Gateway Address
    const axelarGasReceiver = "0xbe406f0189a0b4cf3a05c286473d23791dd44cc6"; // Filecoin Gas Service Address

    // Pass constructor arguments during deployment
    const destinationContract = await DestinationContractFactory.deploy(axelarGatewayAddress, axelarGasReceiver);
    await destinationContract.deployed();

    console.log(`${destinationContractName} deployed to address: ${destinationContract.address} on ${hre.network.name}`);
  } else {
    console.error("Unsupported network. Use 'calibnet' for Filecoin or 'linea' for Linear.");
    process.exit(1);
  }
}

// Run the main function
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});