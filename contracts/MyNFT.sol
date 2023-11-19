// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol"; // With this extension, the owner can burn their own tokens
import "@openzeppelin/contracts/access/AccessControl.sol"; // This is used to grant roles to accounts

contract MyNFT is ERC721, ERC721Burnable, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    // Admin & Minter roles granted to contract creator at deployment
    constructor() ERC721("MyToken", "MTK") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender); // The admin can grant and revoke roles
        _grantRole(MINTER_ROLE, msg.sender); // The minter can mint tokens
    }

    // safeMint comes from OpenZeppelin's ERC721 contract
    function safeMint(
        address to,
        uint256 tokenId
    ) public onlyRole(MINTER_ROLE) {
        _safeMint(to, tokenId);
    }

    // The following functions are overrides required by Solidity.
    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
