/* eslint-disable react-hooks/exhaustive-deps */
import { useAccount, useConnect, useNetwork } from 'wagmi';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'src/redux/hooks';
import {
  setNetworkSelected,
  setStackAddress,
  setTokenOptions,
  setTokenSelected,
} from 'src/redux/actions/general';
import { StackOSDropdown, StackOSIcon } from '@/components';

import WalletSettings from './WalletSettings';
import WalletHome from './wallet-home/index';
import WalletTokenSelect from './WalletTokenSelect';
import { stackAddresses, tokenList } from './helpers';

interface Token {
  id: number;
  title: string;
  icon: string;
  subtitle?: string;
  address?: string;
  coin: string;
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

  const metamask = connectors[0];

  const dispatch = useDispatch();
  const { general } = useSelector((state) => state);
  const { isSettingsOpen, isTokenSelectOpen, networkSelected, tokenOptions } = general;

  const ethereumChain = chains.find((chain) => chain.id === ETHEREUM);
  const binanceChain = chains.find((chain) => chain.id === BSC);
  const polygonChain = chains.find((chain) => chain.id === POLYGON);

  const networkOptions = [
    { title: 'Binance Smart Chain', icon: 'binance', ...binanceChain },
    { title: 'Ethereum', icon: 'ethereum', ...ethereumChain },
    { title: 'Polygon PoS', icon: 'polygon', ...polygonChain },
  ];

  useEffect(() => {
    dispatch(setTokenOptions(tokenList[networkSelected.title as keyof Tokens]));
    dispatch(setStackAddress(stackAddresses[networkSelected.title]));
  }, [networkSelected]);

  useEffect(() => {
    dispatch(setTokenSelected(tokenOptions[0]));
  }, [tokenOptions]);

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
  }

  return (
    <>
      <div className="w-full max-w-[360px] flex flex-row gap-3 mb-5 duration-500">
        {account?.address && (
          <>
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
            <div className="w-full gap-2 h-12 px-2 bg-[#374151] flex flex-row justify-center items-center rounded">
              <div className="h-6 w-6 bg-main-green rounded-full" />
              <span className="whitespace-nowrap text-ellipsis overflow-hidden text-[#FDFDFD] max-w-[120px]">
                {account?.address}
              </span>
            </div>
          </>
        )}
      </div>
      {isSettingsOpen && <WalletSettings />}
      {isTokenSelectOpen && <WalletTokenSelect />}
      {!isSettingsOpen && !isTokenSelectOpen && <WalletHome />}
    </>
  );
};

export default Wallet;
