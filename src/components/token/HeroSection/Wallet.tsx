/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/exhaustive-deps */
import { useAccount, useConnect, useNetwork, useProvider } from 'wagmi';

// import Image from 'next/image';
import { useEffect, useState } from 'react';
import { providers, ethers } from 'ethers';
import { hexStripZeros } from '@ethersproject/bytes';
import { BigNumber } from '@ethersproject/bignumber';
import detectEthereumProvider from '@metamask/detect-provider';
import { SwapWidget } from '@uniswap/widgets';

import { HiSwitchVertical } from 'react-icons/hi';
import { StackOSButton, StackOSDropdown, StackOSIcon, StackOSInput } from '@/components';

// VER O COMPONENTE DO VITOR

interface Token {
  id: number;
  title: string;
  icon: string;
  subtitle?: string;
}

const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;

const Wallet = () => {
  // const { data: account } = useAccount();

  const { connect, connectors } = useConnect();
  const { activeChain, chains, switchNetwork } = useNetwork();

  const metamask = connectors[0];
  const ETHEREUM = 1;
  const BSC = 56;
  const POLYGON = 137;

  const ethereumChain = chains.find((chain) => chain.id === ETHEREUM);
  const binanceChain = chains.find((chain) => chain.id === BSC);
  const polygonChain = chains.find((chain) => chain.id === POLYGON);

  const networkOptions = [
    ...chains,
    { title: 'Ethereum', subtitle: 'Uniswap (v2)', icon: 'uniswap', ...ethereumChain },
    { title: 'Polygon', subtitle: 'Dfyn', icon: 'dfyn', ...polygonChain },
    { title: 'BSC', subtitle: 'PancakeSwap (v2)', icon: 'pancakeswap', ...binanceChain },
  ];

  const jsonRpcEndpoint = `${ethereumChain?.rpcUrls.alchemy}/${apiKey}`;
  const provider = new ethers.providers.AlchemyProvider('homestead', apiKey);
  // const provider = useProvider({ chainId: 1 });
  console.log(provider);

  const [account, setAccount] = useState({
    address: '',
    provider,
  });

  async function connectWallet() {
    //check if Metamask is installed in the browser
    const ethereumProvider = await detectEthereumProvider();
    if (ethereumProvider) {
      // connect(metamask);

      //prompt user to connect their wallet
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const address = accounts[0];
      setAccount({
        address,
        provider: ethereumProvider,
      });
    }
  }

  const [networkSelected, setNetworkSelected] = useState<Token>({
    id: 56,
    title: 'BSC',
    icon: 'pancakeswap',
  });

  useEffect(() => {
    setupNetwork();
  }, []);

  useEffect(() => {
    setupNetwork();
  }, [activeChain]);

  function onChangeNetwork(value: number) {
    if (!activeChain) {
      connect(metamask);
    }

    switchNetwork?.(value);
  }

  function setupNetwork() {
    if (activeChain && activeChain?.id !== networkSelected?.id) {
      setNetworkSelected(networkOptions.find((option) => option.id === activeChain?.id) as Token);
    }
  }

  console.log(account);

  return (
    <>
      <div className="flex flex-row">
        <button
          type="button"
          className="w-full bg-transparent border border-main-green text-main-green rounded-md px-9 py-3"
          onClick={() => connectWallet()}
        >
          {account ? 'Connected' : 'Connect Wallet'}
        </button>
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
      </div>
      <div className="Uniswap">
        <SwapWidget provider={account.provider} jsonRpcEndpoint={jsonRpcEndpoint} />
      </div>
    </>
  );
};

export default Wallet;
