/* eslint-disable react-hooks/exhaustive-deps */
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
            <h1 className="text-white font-extrabold text-6xl">
              {t('TOKEN_HERO_TITLE1')}
              <p className="text-main-green">{t('TOKEN_HERO_TITLE2')}</p>
            </h1>
          </div>
          <p className="text-white font-normal text-xl max-w-lg">{t('TOKEN_HERO_DESCRIPTION')}</p>
        </div>
        <div className="lg:hidden flex flex-col justify-center items-center duration-500">
          <Swap />
        </div>

        <div className="hidden lg:flex lg:flex-col lg:items-end duration-500">
          <Swap />
        </div>
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.1}px, ${offsetY * 0.1}px)` }}
        className="absolute w-[6rem] h-[6rem] top-[28rem] left-[-5rem] sm:top-[17rem] sm:left-[-8rem] md:left-[-4rem] lg:top-[15rem] 2xl:left-[-10rem] 2xl:top-[24rem] duration-500"
      >
        <Image src="/assets/token/hero-layer1.svg" alt="background image" layout="fill" priority />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.06}px, ${offsetY * 0.06}px)` }}
        className="hidden xl:inline w-[11rem] h-[11rem] right-[-7rem] top-[29rem] absolute duration-500"
      >
        <Image src="/assets/token/hero-layer2.svg" alt="background image" layout="fill" priority />
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.01}px, ${offsetY * 0.01}px)` }}
        className="absolute w-[76rem] h-[69rem] xl:w-[100rem] xl:h-[75rem] sm:left-[-6rem] sm:top-[-7rem] md:top-[-12rem] md:left-[-4rem] lg:top-[-14rem] xl:top-[-8rem] xl:left-[-10rem] duration-500"
      >
        <Image src="/assets/token/hero-layer3.svg" alt="background image" layout="fill" priority />
      </div>
    </div>
  );
};

export default HeroSection;
