const hre = require("hardhat");

async function main() {
  const Staking = await hre.ethers.getContractFactory("Staking");
  const staking = await Staking.deploy();

  console.log("StakeToken contract deploy to:", staking.address);
}

main().then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
