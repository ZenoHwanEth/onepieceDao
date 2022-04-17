import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0x5c7F053d9Bf481b2C5AdE042359cd9B5a98e5378"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Thousand Sunny",
        description: "This NFT will give you access to OnePieceDAO!",
        image: readFileSync("scripts/assets/onepieceship.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
