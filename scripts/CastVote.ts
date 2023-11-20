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

  // CAST VOTE
  const voteTx = await tokenizedBallot.vote(0, ethers.parseUnits("200"));

  // CHECK VOTE COUNT FOR ALL PROPOSALS
  const name1 = ethers.decodeBytes32String(proposal0.name);
  const name2 = ethers.decodeBytes32String(proposal1.name);
  console.log(`Proposal ${name1} vote count: ${proposal0.voteCount}`);
  console.log(`Proposal ${name2} vote count: ${proposal1.voteCount}`);

  // CHECK VOTING POWER OF BOTH ADDRESSES
  const votingPower0 = await tokenizedBallot.votingPower(
    "0x986047959F42F6Ed84d2bB20A015A547F1753123"
  );
  const votingPower1 = await tokenizedBallot.votingPower(
    "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"
  );
  console.log(`Remaining voting power of wallet 1: ${votingPower0}`);
  console.log(`Remaining voting power of wallet 2: ${votingPower1}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
