import { useTranslation } from 'react-i18next';
import { Connector, useAccount, useConnect, useDisconnect, useNetwork } from 'wagmi';

// import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HiSwitchVertical } from 'react-icons/hi';
import { StackOSButton, StackOSDropdown, StackOSIcon, StackOSInput } from '@/components';

const HeroSection = () => {
  const { t } = useTranslation();

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

  const [tokenOptions, setTokenOptions] = useState<Array<any>>([
    { id: 1, title: 'ETH', icon: 'eth' },
    { id: 2, title: 'USDC', icon: 'usdc' },
    { id: 3, title: 'USDT', icon: 'usdt' },
    { id: 43, title: 'WETH', icon: 'weth' },
  ]);
  const [networkSelected, setNetworkSelected] = useState<any>({
    id: 56,
    title: 'BSC',
    icon: 'pancakeswap',
  });
  const [tokenSelected, setTokenSelected] = useState<any>({ id: 1, title: 'ETH', icon: 'eth' });
  console.log(activeChain);
  console.log(account);

  useEffect(() => {
    if (activeChain?.id !== networkSelected?.id) {
      setNetworkSelected(networkOptions.find((option) => option.id === activeChain?.id));
    }
    console.log('teste123');
  }, [activeChain?.id, networkOptions, networkSelected?.id]);

  useEffect(() => {
    const tokens = {
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

    setTokenOptions(tokens[networkSelected.title]);
  }, [networkSelected]);

  async function onChangeNetwork(value: any) {
    setNetworkSelected(networkOptions.find((option) => option.id === value));

    if (!activeChain) {
      await connect(metamask);
    }

    switchNetwork?.(value);
  }

  function onChangeToken(value: any) {
    setTokenSelected(tokenOptions.find((option) => option.id === value));
  }

  return (
    <div className="relative flex mt-16 mb-28 lg:mb-48">
      <div className="z-10 flex flex-col w-full justify-start lg:flex-row lg:child:flex-1 duration-500">
        <div className="lg:flex lg:flex-col duration-500 mb-20">
          <div className="flex flex-row justify-start items-center mb-9">
            <h1 className="text-white font-extrabold text-6xl">
              {t('TOKEN_HERO_TITLE1')}
              <p className="text-main-green">{t('TOKEN_HERO_TITLE2')}</p>
            </h1>
          </div>
          <p className="text-white font-normal text-xl max-w-lg">{t('TOKEN_HERO_DESCRIPTION')}</p>
        </div>
        <div className="lg:hidden flex flex-col justify-center items-center duration-500">
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

          {/* <StackOSButton>
            {account ? (
              <div>
                <img src={ensAvatar} alt="ENS Avatar" />
                <div>{ensName ? `${ensName} (${account.address})` : account.address}</div>
                <div>{account?.connector?.name}</div>
                <button type="button" onClick={() => disconnect()}>
                  Disconnect
                </button>
              </div>
            ) : (
              <div>
                {connectors.map((connector) => (
                  <button
                    type="button"
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => connect(connector)}
                  >
                    {connector.name}
                    {!connector.ready && ' (unsupported)'}
                    {isConnecting && connector.id === pendingConnector?.id && ' (connecting)'}
                  </button>
                ))}
              </div>
            )}
          </StackOSButton>
          <div className="bg-main-green">
            {activeChain && <div>{activeChain.name}</div>}

            {chains.map((x) => (
              <button
                type="button"
                disabled={!switchNetwork || x.id === activeChain?.id}
                key={x.id}
                onClick={() => switchNetwork?.(x.id)}
              >
                {x.name}
                {isLoading && pendingChainId === x.id && ' (switching)'}
              </button>
            ))}
          </div> */}
        </div>
        {/* <div className="hidden lg:flex lg:flex-col lg:items-end duration-500">
          <StackOSDropdown
            className="w-full h-12 px-2 bg-main-green flex flex-row justify-center items-center rounded"
            header="Select a Token"
            networkSelected={networkSelected.id}
            networkOptions={networkOptions}
            onChangeSelection={(value) => onChangeNetwork(value)}
          >
            <StackOSIcon className="h-5 w-5" iconName={networkSelected.icon} />
            <span className="text-[#111827] font-medium text-base ml-2 mr-3">{networkSelected.title}</span>
          </StackOSDropdown>
          <div className="mt-20 p-4 bg-[#1F2937] rounded-md">
            <p className="text-[#F9FAFB] font-semibold text-xl mb-8">Buy STACK</p>
            <StackOSInput networkOptions={networkOptions} />
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
        </div> */}
      </div>
      {/* <div className="absolute w-[30.3rem] h-[20.3rem] lg:w-[48.3rem] lg:h-[38.3rem] 2xl:w-[58.3rem] 2xl:h-[48.3rem] right-[-12rem] md:right-[-3rem] lg:right-[-30rem] xl:right-[-10rem] 2xl:right-[-1rem] lg:top-[-3.5rem] 2xl:top-[-4.5rem] duration-500">
        <Image
          draggable={false}
          src="/assets/token/hero-background.svg"
          alt="token heor background"
          layout="fill"
          priority
        />
      </div> */}
    </div>
  );
};

export default HeroSection;
