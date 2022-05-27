import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { createClient, allChains, WagmiConfig, configureChains } from 'wagmi';

import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { providers } from 'ethers';

const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
const ETHEREUM_MAINNET = 1;
const POLYGON_MAINNET = 137;

const filteredChains = allChains.filter(
  (chain) => chain.id === ETHEREUM_MAINNET || chain.id === POLYGON_MAINNET
);

const binanceMainnet = {
  network: '',
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
  network: '',
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

const customChains =
  process.env.NODE_ENV === 'development' ? [...filteredChains, binanceMainnet] : [binanceTestnet];

const { chains, provider } = configureChains(customChains, [publicProvider()]);

const client = createClient({
  autoConnect: true,
  provider(config) {
    return new providers.AlchemyProvider(config.chainId, apiKey);
  },
  connectors() {
    return [
      new MetaMaskConnector({
        chains,
      }),
    ];
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}

export default appWithTranslation(MyApp);
