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
    throw new Error("No recipient address provided");
  }
  const myTokenContractAddress = myAddresses[0];
  const tokenRecipientAddress = myAddresses[1];

  // CONFIGURE PROVIDER & WALLET
  const provider = new ethers.JsonRpcProvider(
    process.env.RPC_ENDPOINT_URL ?? ""
  );
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);

  // ATTACH MYTOKEN CONTRACT
  const myToken__factory = new MyToken__factory(wallet);
  const myToken = myToken__factory.attach(myTokenContractAddress) as MyToken;

  // MINT VOTING TOKENS FOR A RECIPIENT GIVEN AS ARGUMENT
  const mintTxResponse = await myToken.mint(
    tokenRecipientAddress,
    500000000000000000n
  );
  const mintTxReceipt = await mintTxResponse.wait();

  // CHECK BALANCE OF RECIPIENT
  const balance = await myToken.balanceOf(tokenRecipientAddress);
  console.log(
    `Voting tokens minted for ${tokenRecipientAddress}. Balance: ${balance}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
