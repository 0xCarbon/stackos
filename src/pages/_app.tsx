import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { createClient, allChains, WagmiConfig, configureChains } from 'wagmi';

import { publicProvider } from 'wagmi/providers/public';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

import { Provider } from 'react-redux';
import store from '../redux/store';

const ETHEREUM_MAINNET = 1;
const BINANCE_MAINNET = 56;
const POLYGON_MAINNET = 137;

const rpcUrl: any = {
  1: 'https://eth-mainnet.public.blastapi.io/',
  56: 'https://bsc-dataseed.binance.org/',
  137: 'https://polygon-rpc.com/',
};

const filteredChains = allChains.filter(
  (chain) => chain.id === ETHEREUM_MAINNET || chain.id === POLYGON_MAINNET
);

const binanceMainnet = {
  network: '',
  id: BINANCE_MAINNET,
  name: 'Binance Smart Chain',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: {
    default: 'https://bsc-dataseed.binance.org',
    default2: 'https://bsc-dataseed1.defibit.io/',
    default3: 'https://bsc-dataseed1.ninicoin.io/',
  },
  blockExplorers: {
    etherscan: {
      name: 'BNB Smart Chain Explorer',
      url: 'https://bscscan.com',
    },
    default: {
      name: 'BNB Smart Chain Explorer',
      url: 'https://bscscan.com',
    },
  },
};

const { chains, provider } = configureChains(
  [...filteredChains, binanceMainnet],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: rpcUrl[chain.id],
      }),
    }),
    publicProvider(),
  ]
);

const client = createClient({
  autoConnect: true,
  provider,
  connectors() {
    return [
      new MetaMaskConnector({
        chains,
      }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: 'wagmi',
        },
      }),
      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
        },
      }),
    ];
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </WagmiConfig>
  );
}

export default appWithTranslation(MyApp);

// @ts-ignore
if (typeof window !== 'undefined' && window.Cypress) {
  // @ts-ignore
  window.store = store;
  console.log(window);
}
