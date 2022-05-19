import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { Provider, createClient, allChains } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

const ETHEREUM_MAINNET = 1;
const POLYGON_MAINNET = 137;

const filteredChains = allChains.filter(
  (chain) => chain.id === ETHEREUM_MAINNET || chain.id === POLYGON_MAINNET
);

const binanceMainnet = {
  id: 56,
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

const binanceTestnet = {
  id: 97,
  name: 'Binance Testnet',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: {
    default: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  },
  blockExplorers: {
    etherscan: {
      name: 'BNB Smart Chain Explorer',
      url: 'https://testnet.bscscan.com',
    },
    default: {
      name: 'BNB Smart Chain Explorer',
      url: 'https://testnet.bscscan.com',
    },
  },
};

const client = createClient({
  autoConnect: true,
  connectors() {
    return [
      new MetaMaskConnector({
        chains:
          process.env.NODE_ENV === 'development'
            ? [...filteredChains, binanceMainnet]
            : [binanceTestnet],
      }),
    ];
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider client={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
