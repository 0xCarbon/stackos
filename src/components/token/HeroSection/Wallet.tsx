/* eslint-disable react-hooks/exhaustive-deps */
import { useAccount, useConnect, useDisconnect, useNetwork } from 'wagmi';

// import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HiSwitchVertical } from 'react-icons/hi';
import { StackOSButton, StackOSDropdown, StackOSIcon, StackOSInput } from '@/components';

interface Token {
  id: number;
  title: string;
  icon: string;
  subtitle?: string;
}

interface Tokens {
  Ethereum: Token[];
  Polygon: Token[];
  BSC: Token[];
}

const Wallet = () => {
  const { data: account } = useAccount();
  const { connect, connectors, isConnecting, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();
  const { activeChain, chains, switchNetwork } = useNetwork();

  const metamask = connectors[0];
  const ETHEREUM = 1;
  const BSC = 56;
  const POLYGON = 137;

  const ethereumChain = chains.find((chain) => chain.id === ETHEREUM);
  const binanceChain = chains.find((chain) => chain.id === BSC);
  const polygonChain = chains.find((chain) => chain.id === POLYGON);

  const networkOptions = [
    { title: 'Ethereum', subtitle: 'Uniswap (v2)', icon: 'uniswap', ...ethereumChain },
    { title: 'Polygon', subtitle: 'Dfyn', icon: 'dfyn', ...polygonChain },
    { title: 'BSC', subtitle: 'PancakeSwap (v2)', icon: 'pancakeswap', ...binanceChain },
  ];

  const [tokenOptions, setTokenOptions] = useState<Token[]>([
    { id: 1, title: 'ETH', icon: 'eth' },
    { id: 2, title: 'USDC', icon: 'usdc' },
    { id: 3, title: 'USDT', icon: 'usdt' },
    { id: 43, title: 'WETH', icon: 'weth' },
  ]);
  const [networkSelected, setNetworkSelected] = useState<Token>({
    id: 56,
    title: 'BSC',
    icon: 'pancakeswap',
  });
  const [tokenSelected, setTokenSelected] = useState<Token>({ id: 1, title: 'ETH', icon: 'eth' });

  useEffect(() => {
    setupNetwork();
  }, []);

  useEffect(() => {
    const tokens: Tokens = {
      Ethereum: [
        { id: 1, title: 'ETH', icon: 'eth' },
        { id: 2, title: 'USDC', icon: 'usdc' },
        { id: 3, title: 'USDT', icon: 'usdt' },
        { id: 43, title: 'WETH', icon: 'weth' },
      ],
      Polygon: [
        { id: 1, title: 'MATIC', icon: 'matic' },
        { id: 2, title: 'USDC', icon: 'usdc' },
        { id: 3, title: 'USDT', icon: 'usdt' },
      ],
      BSC: [
        { id: 1, title: 'BNB', icon: 'bnb' },
        { id: 2, title: 'BUSD', icon: 'busd' },
        { id: 3, title: 'USDT', icon: 'usdt' },
        { id: 43, title: 'WBNB', icon: 'wbnb' },
      ],
    };

    setTokenOptions(tokens[networkSelected.title as keyof Tokens]);
  }, [networkSelected]);

  useEffect(() => {
    setupNetwork();
  }, [activeChain]);

  function onChangeNetwork(value: number) {
    if (!activeChain) {
      connect(metamask);
    }

    switchNetwork?.(value);
  }

  function onChangeToken(value: number) {
    setTokenSelected(tokenOptions.find((option) => option.id === value) as Token);
  }

  function setupNetwork() {
    if (activeChain && activeChain?.id !== networkSelected?.id) {
      setNetworkSelected(networkOptions.find((option) => option.id === activeChain?.id) as Token);
    }
  }

  return (
    <>
      <StackOSDropdown
        className="w-full h-12 px-2 bg-main-green flex flex-row justify-center items-center rounded"
        header="Select a network"
        selected={networkSelected.id}
        dropdownOptions={networkOptions}
        onChangeSelection={(value) => onChangeNetwork(value)}
      >
        <StackOSIcon className="h-5 w-5" iconName={networkSelected.icon} />
        <span className="text-[#111827] font-medium text-base ml-2 mr-3">
          {networkSelected.title}
        </span>
      </StackOSDropdown>
      <div className="mt-20 p-4 bg-[#1F2937] rounded-md">
        <p className="text-[#F9FAFB] font-semibold text-xl mb-8">Buy STACK</p>
        <StackOSInput
          dropdownOptions={tokenOptions}
          selected={tokenSelected.id}
          onChangeSelection={(value) => onChangeToken(value)}
        />
        <div className="relative z-10 h-1 flex flex-row justify-center items-center">
          <HiSwitchVertical color="#84CC16" size={20} />
        </div>
        <StackOSInput />
        <div className="flex flex-row justify-center items-center mt-6 w-full">
          {account?.address ? (
            <div className="w-full child:w-full" onClick={() => disconnect()}>
              <StackOSButton>Buy STACK</StackOSButton>
            </div>
          ) : (
            <button
              type="button"
              className="w-full bg-transparent border border-main-green text-main-green rounded-md px-9 py-3"
              onClick={() => connect(metamask)}
            >
              {isConnecting && metamask?.id === pendingConnector?.id
                ? 'Connecting Wallet...'
                : 'Connect Wallet'}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Wallet;
