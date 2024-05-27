const hre = require("hardhat");

async function main() {
  const Staking = await hre.ethers.getContractFactory("Staking");
  const staking = await Staking.deploy('0x4f8E4D54E104f3C7A5a5395017a6cf5b5eE8109b','0xD9aB8F5597d5E5764CC7e6e01b484161978b9662',); //deploy, and reward

  console.log("Staking contract deploy to:", staking.target);
}

main().then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
 
  //0x3D1Eff00131bC47f01c8d4231B8d02aAEDD227cC