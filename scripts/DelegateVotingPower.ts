import { ethers } from "ethers";
import { MyToken, MyToken__factory } from "../typechain-types";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  // PASS DEPLOYED CONTRACT ADDRESSES AS ARGUMENTS WHEN RUNNING SCRIPT
  const myAddresses = process.argv.slice(2); // No need to encode, because addresses are already hexadecimals
  if (!myAddresses[0]) {
    throw new Error("No contract address provided");
  }
  if (!myAddresses[1]) {
    throw new Error("No delegate address provided");
  }
  const myTokenContractAddress = myAddresses[0];
  const delegateeAddress = myAddresses[1];

  // CONFIGURE PROVIDER & WALLET, ATTACH MYTOKEN CONTRACT
  const provider = new ethers.JsonRpcProvider(
    process.env.RPC_ENDPOINT_URL ?? ""
  );
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
  const myToken__factory = new MyToken__factory(wallet);
  const myToken = myToken__factory.attach(myTokenContractAddress) as MyToken;

  // DELEGATE VOTING POWER TO AN ADDRESS
  const delegateTx = await myToken.delegate(delegateeAddress);
  await delegateTx.wait();

  // CHECK VOTING POWER OF DELEGATEE
  const delegateeVotingPower = await myToken.getVotes(delegateeAddress);
  console.log(
    `Delegatee ${delegateeAddress} has voting power of ${delegateeVotingPower}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
