import { useTranslation } from 'react-i18next';
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName, useNetwork } from 'wagmi';

// import Image from 'next/image';
import { StackOSButton } from '@/components';

const HeroSection = () => {
  const { data: account } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: account?.address });
  const { data: ensName } = useEnsName({ address: account?.address });
  const { connect, connectors, isConnecting, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();
  const { activeChain, chains, isLoading, pendingChainId, switchNetwork } = useNetwork();
  console.log(chains);
  console.log(activeChain);

  const { t } = useTranslation();

  return (
    <div className="relative flex mt-16 mb-80 lg:mb-48">
      <div className="z-10 flex flex-col w-full justify-start lg:flex-row lg:child:flex-1 duration-500">
        <div className="lg:flex lg:flex-col duration-500 mb-14">
          <div className="flex flex-row justify-start items-center mb-9">
            <h1 className="text-white font-extrabold text-6xl">
              {t('TOKEN_HERO_TITLE1')}
              <p className="text-main-green">{t('TOKEN_HERO_TITLE2')}</p>
            </h1>
          </div>
          <p className="text-white font-normal text-xl max-w-lg">{t('TOKEN_HERO_DESCRIPTION')}</p>
        </div>
        <div className="lg:hidden flex flex-row justify-center items-center duration-500">
          {/* <StackOSButton>BSC</StackOSButton> */}

          <StackOSButton>
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
          </div>
        </div>
        {/* <div className="hidden lg:flex lg:flex-col lg:items-end duration-500">
          <StackOSButton>BSC</StackOSButton>
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
