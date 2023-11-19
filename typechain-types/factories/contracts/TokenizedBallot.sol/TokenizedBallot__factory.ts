/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BytesLike,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  TokenizedBallot,
  TokenizedBallotInterface,
} from "../../../contracts/TokenizedBallot.sol/TokenizedBallot";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_proposalNames",
        type: "bytes32[]",
      },
      {
        internalType: "contract IMyToken",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_voteFreezeBlockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "voteCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenContract",
    outputs: [
      {
        internalType: "contract IMyToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "voteFreezeBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "votingPower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winnerName",
    outputs: [
      {
        internalType: "bytes32",
        name: "winnerName_",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winningProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "winningProposal_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000eda38038062000eda8339818101604052810190620000379190620003dd565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060028190555043811115620000c4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000bb9062000505565b60405180910390fd5b60005b83518110156200015b5760016040518060400160405280868481518110620000f457620000f362000527565b5b6020026020010151815260200160008152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508080620001529062000585565b915050620000c7565b50505050620005d2565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001c9826200017e565b810181811067ffffffffffffffff82111715620001eb57620001ea6200018f565b5b80604052505050565b60006200020062000165565b90506200020e8282620001be565b919050565b600067ffffffffffffffff8211156200023157620002306200018f565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b6200025c8162000247565b81146200026857600080fd5b50565b6000815190506200027c8162000251565b92915050565b600062000299620002938462000213565b620001f4565b90508083825260208201905060208402830185811115620002bf57620002be62000242565b5b835b81811015620002ec5780620002d788826200026b565b845260208401935050602081019050620002c1565b5050509392505050565b600082601f8301126200030e576200030d62000179565b5b81516200032084826020860162000282565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003568262000329565b9050919050565b60006200036a8262000349565b9050919050565b6200037c816200035d565b81146200038857600080fd5b50565b6000815190506200039c8162000371565b92915050565b6000819050919050565b620003b781620003a2565b8114620003c357600080fd5b50565b600081519050620003d781620003ac565b92915050565b600080600060608486031215620003f957620003f86200016f565b5b600084015167ffffffffffffffff8111156200041a576200041962000174565b5b6200042886828701620002f6565b93505060206200043b868287016200038b565b92505060406200044e86828701620003c6565b9150509250925092565b600082825260208201905092915050565b7f546f6b656e697a656442616c6c6f743a20426c6f636b206e756d626572206f6660008201527f20766f74696e6720706f77657220667265657a65206d75737420626520696e2060208201527f7468652070617374000000000000000000000000000000000000000000000000604082015250565b6000620004ed60488362000458565b9150620004fa8262000469565b606082019050919050565b600060208201905081810360008301526200052081620004de565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200059282620003a2565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203620005c757620005c662000556565b5b600182019050919050565b6108f880620005e26000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806398894b121161005b57806398894b12146100ef578063b384abef1461010d578063c07473f614610129578063e2ba53f0146101595761007d565b8063013cf08b1461008257806355a373d6146100b3578063609ff1bd146100d1575b600080fd5b61009c6004803603810190610097919061049e565b610177565b6040516100aa9291906104f3565b60405180910390f35b6100bb6101ab565b6040516100c8919061059b565b60405180910390f35b6100d96101cf565b6040516100e691906105b6565b60405180910390f35b6100f7610257565b60405161010491906105b6565b60405180910390f35b610127600480360381019061012291906105d1565b61025d565b005b610143600480360381019061013e919061064f565b61033e565b60405161015091906105b6565b60405180910390f35b61016161042f565b60405161016e919061067c565b60405180910390f35b6001818154811061018757600080fd5b90600052602060002090600202016000915090508060000154908060010154905082565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000905060005b6001805490508110156102525781600182815481106101fb576101fa610697565b5b906000526020600020906002020160010154111561023f576001818154811061022757610226610697565b5b90600052602060002090600202016001015491508092505b808061024a906106f5565b9150506101d9565b505090565b60025481565b806102673361033e565b10156102a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029f906107c0565b60405180910390fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102f791906107e0565b92505081905550806001838154811061031357610312610697565b5b9060005260206000209060020201600101600082825461033391906107e0565b925050819055505050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633a46b1a8846002546040518363ffffffff1660e01b81526004016103dd929190610823565b602060405180830381865afa1580156103fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041e9190610861565b610428919061088e565b9050919050565b6000600161043b6101cf565b8154811061044c5761044b610697565b5b906000526020600020906002020160000154905090565b600080fd5b6000819050919050565b61047b81610468565b811461048657600080fd5b50565b60008135905061049881610472565b92915050565b6000602082840312156104b4576104b3610463565b5b60006104c284828501610489565b91505092915050565b6000819050919050565b6104de816104cb565b82525050565b6104ed81610468565b82525050565b600060408201905061050860008301856104d5565b61051560208301846104e4565b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061056161055c6105578461051c565b61053c565b61051c565b9050919050565b600061057382610546565b9050919050565b600061058582610568565b9050919050565b6105958161057a565b82525050565b60006020820190506105b0600083018461058c565b92915050565b60006020820190506105cb60008301846104e4565b92915050565b600080604083850312156105e8576105e7610463565b5b60006105f685828601610489565b925050602061060785828601610489565b9150509250929050565b600061061c8261051c565b9050919050565b61062c81610611565b811461063757600080fd5b50565b60008135905061064981610623565b92915050565b60006020828403121561066557610664610463565b5b60006106738482850161063a565b91505092915050565b600060208201905061069160008301846104d5565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061070082610468565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610732576107316106c6565b5b600182019050919050565b600082825260208201905092915050565b7f546f6b656e697a656442616c6c6f743a20747279696e6720746f20766f74652060008201527f6d6f7265207468616e20616c6c6f776564000000000000000000000000000000602082015250565b60006107aa60318361073d565b91506107b58261074e565b604082019050919050565b600060208201905081810360008301526107d98161079d565b9050919050565b60006107eb82610468565b91506107f683610468565b925082820190508082111561080e5761080d6106c6565b5b92915050565b61081d81610611565b82525050565b60006040820190506108386000830185610814565b61084560208301846104e4565b9392505050565b60008151905061085b81610472565b92915050565b60006020828403121561087757610876610463565b5b60006108858482850161084c565b91505092915050565b600061089982610468565b91506108a483610468565b92508282039050818111156108bc576108bb6106c6565b5b9291505056fea26469706673582212200c94f3c1fc9b8c1965453f412dc2e26e6743d9a6e6d565e007c4b7933c898d3d64736f6c63430008130033";

type TokenizedBallotConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenizedBallotConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenizedBallot__factory extends ContractFactory {
  constructor(...args: TokenizedBallotConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _proposalNames: BytesLike[],
    _tokenContract: AddressLike,
    _voteFreezeBlockNumber: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _proposalNames,
      _tokenContract,
      _voteFreezeBlockNumber,
      overrides || {}
    );
  }
  override deploy(
    _proposalNames: BytesLike[],
    _tokenContract: AddressLike,
    _voteFreezeBlockNumber: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _proposalNames,
      _tokenContract,
      _voteFreezeBlockNumber,
      overrides || {}
    ) as Promise<
      TokenizedBallot & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TokenizedBallot__factory {
    return super.connect(runner) as TokenizedBallot__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenizedBallotInterface {
    return new Interface(_abi) as TokenizedBallotInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TokenizedBallot {
    return new Contract(address, _abi, runner) as unknown as TokenizedBallot;
  }
}