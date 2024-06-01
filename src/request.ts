import axios, { AxiosResponse } from "axios";

class OKLinkSDK {
  private apiKey: string;
  private baseURL: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseURL = "https://www.oklink.com/";
  }

  public async getTokenBalance(
    chainShortName: string,
    address: string,
    protocolType: string,
    token_20?: string,
    token_721?: string,
    token_1155?: string,
    tokenContractAddress?: string,
    page?: string,
    limit?: string
  ): Promise<AxiosResponse> {
    const endpoint = "api/v5/explorer/address/token-balance";
    const params = {
      chainShortName,
      address,
      protocolType,
      token_20,
      token_721,
      token_1155,
      tokenContractAddress,
      page,
      limit,
    };

    try {
      const response = await axios.get(`${this.baseURL}${endpoint}`, {
        headers: {
          "Ok-Access-Key": this.apiKey,
        },
        params,
      });
      return response;
    } catch (error) {
      console.error(`Error making GET request to ${endpoint}: ${error}`);
      throw error;
    }
  }
}

export default OKLinkSDK;
