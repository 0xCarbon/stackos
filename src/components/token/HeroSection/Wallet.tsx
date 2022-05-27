/* eslint-disable import/extensions */
import { useAccount, useNetwork } from 'wagmi';
import '@uniswap/widgets/fonts.css';
import detectEthereumProvider from '@metamask/detect-provider';
import { useEffect, useState } from 'react';
import { SwapWidget, Theme } from '@uniswap/widgets';
import { NetworksDropdown } from '@/components';
import ConnectButton from '@/components/ConnectButton';
import { CHAIN } from '../helpers';

const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;

const theme: Theme = {
  primary: '#FFF',
  secondary: '#A9A9A9',
  interactive: '#111827',
  container: '#1F2937',
  module: '#374151',
  accent: '#91cf15',
  outline: '#374151',
  dialog: '#FFF',
  borderRadius: 1,
  onInteractive: '#FFF',
};

const TOKEN_LIST = [
  {
    name: 'USD Coin',
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    symbol: 'USDC',
    decimals: 6,
    chainId: CHAIN.ETHEREUM,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    name: 'Tether USD',
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    symbol: 'USDT',
    decimals: 6,
    chainId: CHAIN.ETHEREUM,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
  {
    name: 'Wrapped Ether',
    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    symbol: 'WETH',
    decimals: 6,
    chainId: CHAIN.ETHEREUM,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  {
    name: 'STACK',
    address: '0x56a86d648c435dc707c8405b78e2ae8eb4e60ba4',
    symbol: 'STA',
    decimals: 18,
    chainId: CHAIN.ETHEREUM,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x56a86d648c435dc707c8405b78e2ae8eb4e60ba4/logo.png',
  },
  {
    name: 'USD Coin',
    address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    symbol: 'USDC',
    decimals: 6,
    chainId: CHAIN.POLYGON,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/logo.png',
  },
  {
    name: 'USDT Coin',
    address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    symbol: 'USDT',
    decimals: 6,
    chainId: CHAIN.POLYGON,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0xc2132D05D31c914a87C6611C10748AEb04B58e8F/logo.png',
  },
  {
    name: 'STACK',
    address: '0x980111ae1B84E50222C8843e3A7a038F36Fecd2b',
    symbol: 'STA',
    decimals: 18,
    chainId: CHAIN.POLYGON,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x980111ae1B84E50222C8843e3A7a038F36Fecd2b/logo.png',
  },
  {
    name: 'STACK',
    address: '0x56a86d648c435dc707c8405b78e2ae8eb4e60ba4',
    symbol: 'STA',
    decimals: 18,
    chainId: CHAIN.BSC,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x56a86d648c435dc707c8405b78e2ae8eb4e60ba4/logo.png',
  },
];

const Wallet = () => {
  const { activeChain } = useNetwork();
  const { data: account } = useAccount();
  const jsonRpcEndpoint = `${activeChain?.rpcUrls.alchemy}/${apiKey}`;
  const [ethereumProvider, setEthereumProvider] = useState();
  const [stackTokenAddress, setStackTokenAddress] = useState<string>();

  useEffect(() => {
    setStackTokenAddress(
      TOKEN_LIST.find((token) => token.name === 'STACK' && token.chainId === activeChain?.id)
        ?.address
    );
  }, [activeChain]);

  useEffect(() => {
    if (account) {
      detectEthereumProvider().then((d) => setEthereumProvider(d));
    }
  }, [account]);

  return (
    <div className="w-[22.5rem]">
      <div className="flex flex-row justify-between mb-3">
        <ConnectButton className="flex justify-center items-center w-40 h-10 bg-main-green text-main-blue font-bold text-lg rounded-md" />
        <NetworksDropdown header="Network" />
      </div>
      <div className="Uniswap">
        <SwapWidget
          provider={ethereumProvider}
          jsonRpcEndpoint={jsonRpcEndpoint}
          defaultInputAmount="1"
          tokenList={TOKEN_LIST}
          defaultOutputTokenAddress={stackTokenAddress}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default Wallet;
