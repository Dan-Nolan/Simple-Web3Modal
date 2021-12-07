import Portis from "@portis/web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  portis: {
    package: Portis, 
    options: {
      id: process.env.PORTIS_ID
    }
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.INFURA_ID
    }
  }
};

export default providerOptions;
