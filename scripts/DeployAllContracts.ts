import { ethers } from "ethers";
import { MyToken__factory, TokenizedBallot__factory } from "../typechain-types";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  // PASS PROPOSALS AS ARGUMENTS WHEN RUNNING SCRIPT
  const notYetEncodedProposals = process.argv.slice(2);
  if (!notYetEncodedProposals || notYetEncodedProposals.length < 1)
    throw new Error("Proposals not provided");
  const proposals = notYetEncodedProposals.map(ethers.encodeBytes32String);

  // CONFIGURE PROVIDER & WALLET
  const provider = new ethers.JsonRpcProvider(
    process.env.RPC_ENDPOINT_URL ?? ""
  );
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);

  // DEPLOY MYTOKEN, GET CONTRACT ADDRESS & BLOCK NUMBER
  const myToken__factory = new MyToken__factory(wallet);
  const myToken = await myToken__factory.deploy();
  await myToken.waitForDeployment();
  const myTokenAddress = await myToken.getAddress();
  const blockNumber = await provider.getBlockNumber();
  console.log(
    `MyToken contract deployed at ${myTokenAddress} at block ${blockNumber}\n`
  );

  // MINT VOTING TOKENS FOR A RECIPIENT GIVEN AS ARGUMENT
  const mintTxResponse = await myToken.mint(wallet.address, 500);
  const mintTxReceipt = await mintTxResponse.wait();
  const balance = await myToken.balanceOf(wallet.address);
  console.log(`Voting tokens minted. Balance: ${balance}`);

  // DELEGATE VOTING POWER TO AN ADDRESS
  const delegateTx = await myToken.delegate(wallet.address);
  console.log("Delegating voting power...");
  await delegateTx.wait();
  console.log("Voting power delegated");
  const delegateeVotingPower = await myToken.getVotes(wallet.address);
  console.log(`Delegatee is ${wallet.address}`);
  console.log(`Delegatee has voting power of ${delegateeVotingPower}`);

  // DEPLOY TOKENIZED BALLOT
  const freezeBlockNumber = await provider.getBlockNumber();
  const tokenizedBallot__factory = new TokenizedBallot__factory(wallet);
  const tokenizedBallot = await tokenizedBallot__factory.deploy(
    proposals,
    myTokenAddress,
    freezeBlockNumber
  );
  await tokenizedBallot.waitForDeployment();
  const tokenizedBallotAddress = await tokenizedBallot.getAddress();
  console.log("TokenizedBallot contract deployed at", tokenizedBallotAddress);
  console.log("Proposals:", notYetEncodedProposals);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
