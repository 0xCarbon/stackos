/* eslint-disable react-hooks/exhaustive-deps */
import { useAccount, useNetwork } from 'wagmi';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'src/redux/hooks';
import { useTranslation } from 'react-i18next';
import {
  resetState,
  setNetworkSelected,
  setSettingsStatus,
  setStackAddress,
  setTokenBalance,
  setTokenOptions,
  setTokenSelected,
  setTokenSelectStatus,
  setWalletModalStatus,
} from '@/redux/actions/swap';
import { StackOSDropdown, StackOSIcon, StackOSModal } from '@/components';

import SwapSettings from './SwapSettings';
import SwapHome from './SwapHome';
import SwapTokenSelect from './swap-token-select/index';
import { stackAddresses, tokenList } from './helpers';
import SwapButton from './SwapButton';
import SwapSummary from './SwapSummary';
import SwapError from './SwapError';

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

const Swap = () => {
  const { t } = useTranslation();

  const { data: account } = useAccount();
  const { activeChain, chains, switchNetwork, isSuccess, switchNetworkAsync } = useNetwork();

  const [isAccountModalOpen, setAccountModalStatus] = useState(false);

  const dispatch = useDispatch();
  const { swap } = useSelector((state) => state);
  const {
    isSettingsOpen,
    isTokenSelectOpen,
    networkSelected,
    tokenOptions,
    isSummaryOpen,
    isErrorOpen,
  } = swap;

  const ethereumChain = chains.find((chain) => chain.id === ETHEREUM);
  const binanceChain = chains.find((chain) => chain.id === BSC);
  const polygonChain = chains.find((chain) => chain.id === POLYGON);

  const networkOptions = [
    { title: 'Binance Smart Chain', icon: 'binance', ...binanceChain },
    { title: 'Ethereum', icon: 'ethereum', ...ethereumChain },
    { title: 'Polygon PoS', icon: 'polygon', ...polygonChain },
  ];

  useEffect(() => {
    setupSwap();
  }, [networkSelected]);

  async function setupSwap() {
    if (activeChain && activeChain?.id !== networkSelected?.id) {
      dispatch(resetState());
    }
    dispatch(setTokenOptions(tokenList[networkSelected.title as keyof Tokens]));
    dispatch(setTokenSelected(tokenList[networkSelected.title as keyof Tokens][0]));
    dispatch(setStackAddress(stackAddresses[networkSelected.title]));
    dispatch(setSettingsStatus(false));
    dispatch(setTokenSelectStatus(false));
    await switchNetworkAsync?.(networkSelected.id);
    dispatch(setTokenBalance(null));
  }

  useEffect(() => {
    dispatch(setTokenSelected(tokenOptions[0]));
  }, [isSuccess]);

  useEffect(() => {
    setupNetwork();
  }, [activeChain]);

  function setupNetwork() {
    if (activeChain && activeChain?.id !== networkSelected?.id) {
      const newNetwork = networkOptions.find((option) => option.id === activeChain?.id) as Token;
      dispatch(setNetworkSelected(newNetwork));
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
              selected={networkSelected?.id}
              dropdownOptions={networkOptions}
              onChangeSelection={(value) => switchNetwork?.(value)}
            >
              <StackOSIcon className="h-5 w-5" iconName={networkSelected.icon} />
              <span className="text-[#111827] max-w-[90px] font-medium text-base ml-2 mr-3 whitespace-nowrap text-ellipsis overflow-hidden">
                {networkSelected.title}
              </span>
            </StackOSDropdown>
            <div
              className="w-full gap-2 h-12 px-2 bg-[#374151] flex flex-row justify-center items-center rounded hover:cursor-pointer"
              onClick={() => setAccountModalStatus(true)}
            >
              <div className="h-6 w-6 bg-main-green rounded-full" />
              <span className="whitespace-nowrap text-ellipsis overflow-hidden text-[#FDFDFD] max-w-[120px]">
                {account?.address}
              </span>
            </div>
          </>
        )}
      </div>
      {isSettingsOpen && <SwapSettings />}
      {isTokenSelectOpen && <SwapTokenSelect />}
      {isSummaryOpen && <SwapSummary />}
      {isErrorOpen && <SwapError />}
      {!isSettingsOpen && !isTokenSelectOpen && !isSummaryOpen && !isErrorOpen && <SwapHome />}
      <StackOSModal
        size="small"
        showModal={isAccountModalOpen}
        onCloseModal={() => setAccountModalStatus(false)}
      >
        <div className="flex flex-col justify-center items-center text-center text-white">
          <span className="font-semibold text-xl text-[#F9FAFB]">
            {t('SWAP_MODAL_ACCOUNT_TITLE')}
          </span>
          <div className="py-6 flex flex-col justify-center items-center">
            <div className="w-full max-w-[186px] gap-2 h-12 px-2 bg-[#374151] flex flex-row justify-center items-center rounded">
              <div className="h-6 w-6 bg-main-green rounded-full" />
              <span className="whitespace-nowrap text-ellipsis overflow-hidden text-[#FDFDFD] max-w-[120px]">
                {account?.address}
              </span>
            </div>
            <span className="mt-4">{`Connected with ${account?.connector?.id}`}</span>
          </div>
          <div
            className="flex flex-row justify-center items-center mb-8"
            onClick={() => {
              setAccountModalStatus(false);
              dispatch(setWalletModalStatus(true));
            }}
          >
            <SwapButton className="px-20">{t('SWAP_MODAL_ACCOUNT_FOOTER')}</SwapButton>
          </div>
        </div>
      </StackOSModal>
    </>
  );
};

export default Swap;
