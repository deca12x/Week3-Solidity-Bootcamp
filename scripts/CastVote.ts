import { ethers } from "ethers";
import { TokenizedBallot, TokenizedBallot__factory } from "../typechain-types";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  // PASS DEPLOYED CONTRACT ADDRESSES AS ARGUMENTS WHEN RUNNING SCRIPT
  const myAddresses = process.argv.slice(2); // No need to encode, because addresses are already hexadecimals
  if (!myAddresses[0]) {
    throw new Error("No contract address provided");
  }
  const ballotContractAddress = myAddresses[0];

  // CONFIGURE PROVIDER & WALLET, ATTACH MYTOKEN CONTRACT
  const provider = new ethers.JsonRpcProvider(
    process.env.RPC_ENDPOINT_URL ?? ""
  );
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
  const tokenizedBallot__factory = new TokenizedBallot__factory(wallet);
  const tokenizedBallot = tokenizedBallot__factory.attach(
    ballotContractAddress
  ) as TokenizedBallot;

  // FETCH PROPOSALS
  const proposal0 = await tokenizedBallot.proposals(0);
  const proposal1 = await tokenizedBallot.proposals(1);

  // CHECK VOTING POWER
  console.log(`My address: ${wallet.address}`);
  const votingPowerBefore = await tokenizedBallot.votingPower(wallet.address);
  console.log(`My remaining voting power: ${votingPowerBefore}`);

  // CAST VOTE
  const voteTx = await tokenizedBallot
    .connect(wallet)
    .vote(0, ethers.parseUnits("200"));

  // CHECK VOTE COUNT FOR ALL PROPOSALS
  const name1 = ethers.decodeBytes32String(proposal0.name);
  const name2 = ethers.decodeBytes32String(proposal1.name);
  console.log(`Proposal ${name1} vote count: ${proposal0.voteCount}`);
  console.log(`Proposal ${name2} vote count: ${proposal1.voteCount}`);

  // CHECK VOTING POWER
  const votingPowerAfter = await tokenizedBallot.votingPower(
    "0x986047959F42F6Ed84d2bB20A015A547F1753123"
  );
  console.log(`My remaining voting power: ${votingPowerAfter}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
