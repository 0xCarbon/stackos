/* eslint-disable react-hooks/exhaustive-deps */
import StackOSButton from '@/components/StackOSButton';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Swap from './swap';

const HeroSection = ({ offsetY }: { offsetY: number }) => {
  const { t } = useTranslation();

  return (
    <div className="relative flex mt-16 mb-28 lg:mb-48">
      <div className="z-10 flex flex-col w-full justify-start lg:flex-row lg:child:flex-1 duration-500">
        <div className="lg:flex lg:flex-col duration-500 mb-20">
          <div className="flex flex-row justify-start items-center mb-9">
            <h1 className="text-white font-extrabold text-5xl">
              {t('TOKEN_HERO_TITLE1')}
              <p className="text-main-green">{t('TOKEN_HERO_TITLE2')}</p>
            </h1>
          </div>
          <p className="text-white font-normal text-xl max-w-lg">{t('TOKEN_HERO_DESCRIPTION')}</p>
        </div>
        <div className="hidden lg:hidden sm:flex flex-col justify-center items-center duration-500">
          <Swap />
        </div>

        <div className="hidden lg:flex lg:flex-col lg:items-end duration-500">
          <Swap />
        </div>
        <div className="sm:hidden flex w-full justify-center">
          <a href="https://app.1inch.io/#/137/swap/MATIC/STACK" target="_blank" rel="noreferrer">
            <StackOSButton>{t('TOKEN_SWAP_HERO_BUTTON')}</StackOSButton>
          </a>
        </div>
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.06}px, ${offsetY * 0.06}px)` }}
        className="z-10 absolute w-[6rem] h-[6rem] top-[18rem] left-[-5rem] sm:top-[17rem] sm:left-[-8rem] md:left-[-4rem] lg:top-[15rem] 2xl:left-[-7rem] duration-200"
      >
        <Image src="/assets/token/hero-layer1.svg" alt="hero-layer1" layout="fill" priority />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.035}px, ${offsetY * 0.035}px)` }}
        className="z-10 hidden xl:inline w-[11rem] h-[11rem] right-[-7rem] top-[23rem] absolute duration-200"
      >
        <Image src="/assets/token/hero-layer2.svg" alt="hero-layer2" layout="fill" priority />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.01}px, ${offsetY * 0.01}px)` }}
        className="selectDisable absolute w-[105rem] h-[50rem] sm:w-[92.5rem] sm:h-[38.62rem] top-[-8rem] sm:top-[-4rem] md:top-[-8rem] lg:top-[-9rem] xl:top-[-8rem] left-[-12rem] sm:left-[-14rem] md:left-[-12rem] xl:left-[-10rem] duration-200"
      >
        <Image src="/assets/token/hero-layer3.svg" alt="hero-layer3" layout="fill" priority />
      </div>
    </div>
  );
};

export default HeroSection;
