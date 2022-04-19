import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0x00C9CC1F52Bd17D83b08cd2cC87BE8520b6c1f54");

(async () => {
  try {
    const amount = 1000000;

    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    console.log(
      "✅ There now is",
      totalSupply.displayValue,
      "$Yonko in circulation"
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();
