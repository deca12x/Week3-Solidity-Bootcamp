// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface IMyToken {
    function mint(address to, uint256 amount) external;

    function burnFrom(address account, uint256 amount) external;

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);
}

interface IMyNFT {
    function safeMint(address to, uint256 tokenId) external;
}

contract TokenSale is Ownable {
    uint256 public ratio;
    uint256 public price;
    IMyToken public tokenContract;
    IMyNFT public nftContract;

    // uint256 public withdrawableAmount;

    constructor(
        uint256 _ratio,
        uint256 _price,
        IMyToken _tokenContract, // address of the token contract
        IMyNFT _nftContract // address of the NFT contract
    ) {
        ratio = _ratio;
        price = _price;
        tokenContract = _tokenContract;
        nftContract = _nftContract;
    }

    function buyTokens() external payable {
        tokenContract.mint(msg.sender, msg.value * ratio);
    }

    function returnTokens(uint256 amount) external {
        tokenContract.burnFrom(msg.sender, amount);
        payable(msg.sender).transfer(amount / ratio);
    }

    function buyNFT(uint tokenId) external {
        tokenContract.transferFrom(msg.sender, address(this), price);
        nftContract.safeMint(msg.sender, tokenId);
        // account for withdrawable amount
    }
}
