/* eslint-disable react-hooks/exhaustive-deps */
import { useAccount, useConnect, useNetwork } from 'wagmi';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'src/redux/hooks';
import { setNetworkSelected, setStackAddress, setTokenOptions } from 'src/redux/actions/general';
import { StackOSDropdown, StackOSIcon } from '@/components';

import WalletSettings from './WalletSettings';
import WalletDefault from './WalletDefault';

interface Token {
  id: number;
  title: string;
  icon: string;
  subtitle?: string;
  address?: string;
}

interface Tokens {
  Ethereum: Token[];
  'Polygon PoS': Token[];
  'Binance Smart Chain': Token[];
}

const ETHEREUM = 1;
const BSC = 56;
const POLYGON = 137;

const Wallet = () => {
  const { data: account } = useAccount();
  const { connect, connectors, isConnecting, pendingConnector } = useConnect();
  const { activeChain, chains, switchNetwork } = useNetwork();

  // const { data: token } = useToken({
  //   address: '0x6855f7bb6287F94ddcC8915E37e73a3c9fEe5CF3',
  // });
  // console.log(token);
  // console.log(ethers);
  const metamask = connectors[0];

  const dispatch = useDispatch();
  const { general } = useSelector((state) => state);
  const { isSettingsOpen, networkSelected } = general;

  const ethereumChain = chains.find((chain) => chain.id === ETHEREUM);
  const binanceChain = chains.find((chain) => chain.id === BSC);
  const polygonChain = chains.find((chain) => chain.id === POLYGON);

  const networkOptions = [
    { title: 'Binance Smart Chain', icon: 'binance', ...binanceChain },
    { title: 'Ethereum', icon: 'ethereum', ...ethereumChain },
    { title: 'Polygon PoS', icon: 'polygon', ...polygonChain },
  ];

  useEffect(() => {
    const tokens: Tokens = {
      Ethereum: [
        { id: 1, title: 'ETH', icon: 'eth' },
        {
          id: 2,
          title: 'USDC',
          icon: 'usdc',
          address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        },
        {
          id: 3,
          title: 'USDT',
          icon: 'usdt',
          address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        },
        {
          id: 43,
          title: 'WETH',
          icon: 'weth',
          address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        },
      ],
      'Polygon PoS': [
        {
          id: 1,
          title: 'MATIC',
          icon: 'matic',
          address: '0x0000000000000000000000000000000000001010',
        },
        {
          id: 2,
          title: 'USDC',
          icon: 'usdc',
          address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
        },
        {
          id: 3,
          title: 'USDT',
          icon: 'usdt',
          address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
        },
      ],
      'Binance Smart Chain': [
        { id: 1, title: 'BNB', icon: 'bnb', address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' },
        {
          id: 2,
          title: 'BUSD',
          icon: 'busd',
          address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        },
        { id: 3, title: 'USDT', icon: 'usdt' },
        {
          id: 43,
          title: 'WBNB',
          icon: 'wbnb',
          address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        },
      ],
    };

    const stackAddresses: any = {
      Ethereum: '0x56A86d648c435DC707c8405B78e2Ae8eB4E60Ba4',
      BSC: '0x6855f7bb6287F94ddcC8915E37e73a3c9fEe5CF3',
      Polygon: '0x980111ae1B84E50222C8843e3A7a038F36Fecd2b',
    };

    // console.log(tokens[networkSelected.title as keyof Tokens]);

    dispatch(setTokenOptions(tokens[networkSelected.title as keyof Tokens]));
    dispatch(setStackAddress(stackAddresses[networkSelected.title]));
  }, [networkSelected]);

  useEffect(() => {
    setupNetwork();
  }, [activeChain]);

  function onChangeNetwork(value: number) {
    if (!activeChain || !account) {
      connect(metamask);
    }

    switchNetwork?.(value);
  }

  function setupNetwork() {
    if (activeChain && activeChain?.id !== networkSelected?.id) {
      const newNetwork = networkOptions.find((option) => option.id === activeChain?.id) as Token;
      dispatch(setNetworkSelected(newNetwork));

      if (!account) {
        connect(metamask);
      }
    }
    // console.log(account);
  }

  return (
    <>
      <div className="w-full max-w-[360px] flex flex-row gap-3 mb-5 duration-500">
        <StackOSDropdown
          className="w-full h-12 px-2 bg-main-green flex flex-row justify-center items-center rounded"
          header="Select a network"
          selected={networkSelected.id}
          dropdownOptions={networkOptions}
          onChangeSelection={(value) => onChangeNetwork(value)}
        >
          <StackOSIcon className="h-5 w-5" iconName={networkSelected.icon} />
          <span className="text-[#111827] max-w-[90px] font-medium text-base ml-2 mr-3 whitespace-nowrap text-ellipsis overflow-hidden">
            {networkSelected.title}
          </span>
        </StackOSDropdown>
        <div className="flex flex-row justify-center items-center w-full">
          {account?.address ? (
            <div className="w-full gap-2 h-12 px-2 bg-[#374151] flex flex-row justify-center items-center rounded">
              <div className="h-6 w-6 bg-main-green rounded-full" />
              <span className="whitespace-nowrap text-ellipsis overflow-hidden text-[#FDFDFD] max-w-[120px]">
                {account?.address}
              </span>
            </div>
          ) : (
            <button
              type="button"
              className="w-full bg-transparent border border-main-green text-main-green rounded-md px-2 py-3"
              onClick={() => connect(metamask)}
            >
              {isConnecting && metamask?.id === pendingConnector?.id
                ? 'Connecting Wallet...'
                : 'Connect Wallet'}
            </button>
          )}
        </div>
      </div>
      {isSettingsOpen && <WalletSettings />}
      {!isSettingsOpen && <WalletDefault />}
    </>
  );
};

export default Wallet;
