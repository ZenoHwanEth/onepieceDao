import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // Deploy a standard ERC-20 contract
    const tokenAddress = await sdk.deployer.deployToken({
      name: "One Piece Governance Token",
      symbol: "Yonko",
      primary_sale_recipient: AddressZero,
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenAddress
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
