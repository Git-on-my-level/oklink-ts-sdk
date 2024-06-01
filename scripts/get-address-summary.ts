import OKLinkSDK from "../src/request";
import { PrivateConfig } from "../config";

async function main() {
  const sdk = new OKLinkSDK(PrivateConfig.API_KEY);

  const response = await sdk.getAddressSummary(
    "KLAYTN",
    "0x32891ead6894b87c3e638f621fe643238c98f4ec"
  );

  console.log(response.data.data[0]);
}

main();
