import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { Provider, createClient, allChains } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

const filteredChains = allChains.filter((chain) => chain.id === 1 || chain.id === 137);
const bscChain = {
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

const client = createClient({
  autoConnect: true,
  connectors() {
    return [new MetaMaskConnector({ chains: [...filteredChains, bscChain] })];
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
