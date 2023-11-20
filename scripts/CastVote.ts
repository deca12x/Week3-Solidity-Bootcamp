import { ethers } from "ethers";
import {
  MyToken,
  MyToken__factory,
  TokenizedBallot,
  TokenizedBallot__factory,
} from "../typechain-types";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  // CONFIGURE PROVIDER & WALLET, ATTACH CONTRACT
  const provider = new ethers.JsonRpcProvider(
    process.env.RPC_ENDPOINT_URL ?? ""
  );
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
  const myTokenContractAddress = "0x335a040203392ECdc4b34805da89623C4c5F8a4E";
  const myToken__factory = new MyToken__factory(wallet);
  const myToken = myToken__factory.attach(myTokenContractAddress) as MyToken;
  const ballotContractAddress = "0x79b4107dd9fA31F02c853C43Ca14f92242081894";
  const tokenizedBallot__factory = new TokenizedBallot__factory(wallet);
  const tokenizedBallot = tokenizedBallot__factory.attach(
    ballotContractAddress
  ) as TokenizedBallot;

  // CHECK VOTING POWER
  console.log(`My address: ${wallet.address}`);
  // const votingPowerBefore = await tokenizedBallot.votingPower(wallet.address);
  const voteFreezeBlockNumber = await tokenizedBallot.voteFreezeBlockNumber();
  const votingPowerBefore = await myToken.getPastVotes(
    wallet.address,
    voteFreezeBlockNumber
  );
  console.log(`My remaining voting power: ${votingPowerBefore}`);

  // FETCH PROPOSALS
  const proposal0 = await tokenizedBallot.proposals(0);
  const proposal1 = await tokenizedBallot.proposals(1);

  // CAST VOTE
  const voteTx = await tokenizedBallot.vote(0, 200);
  console.log("Casting vote...");
  await voteTx.wait();

  // CHECK VOTE COUNT FOR ALL PROPOSALS
  const name1 = ethers.decodeBytes32String(proposal0.name);
  const name2 = ethers.decodeBytes32String(proposal1.name);
  console.log(`Proposal ${name1} vote count: ${proposal0.voteCount}`);
  console.log(`Proposal ${name2} vote count: ${proposal1.voteCount}`);

  // CHECK VOTING POWER
  const votingPowerAfter = await tokenizedBallot.votingPower(wallet.address);
  console.log(`My remaining voting power: ${votingPowerAfter}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
