import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { Separator } from '@radix-ui/react-separator';
import React from 'react';
import Link from 'next/link';
import titleData from './helpers/hero-titles.json';
import StackOSButton from '../StackOSButton';

const HeroSection = ({ offsetY }: { offsetY: number }) => {
  const { t } = useTranslation();

  return (
    <div className="flex text-white relative mt-14 md:mt-20 lg:mt-24 xl:mt-48">
      <div className="z-10 flex flex-col">
        <h1 className="leading-none text-4xl lg:text-6xl font-extrabold">{t('HOME_HERO_TITLE')}</h1>
        <Lottie className="mt-3" loop autoplay animationData={titleData} height={70} width="100%" />

        <span className="text-base lg:text-xl font-normal my-10">
          {t('HOME_HERO_SUBTITLE1')}
          <br />
          {t('HOME_HERO_SUBTITLE2')}
        </span>
        <div className="flex space-x-4 child:min-w-[7rem]">
          <a href="https://app.stackos.io/" target="_blank" rel="noreferrer">
            <StackOSButton>{t('HOME_HERO_BUTTON1')}</StackOSButton>
          </a>
          <Link className="z-10" href="/token" passHref>
            <a>
              <StackOSButton>{t('HOME_HERO_BUTTON2')}</StackOSButton>
            </a>
          </Link>
        </div>
        <div className="flex mt-12 lg:mt-16 2xl:mt-40">
          <Separator className="w-[3px] bg-main-green mr-8" />
          <div className="flex flex-col">
            <span className="font-semibold text-3xl lg:text-4xl lg:font-normal">+1,4k</span>
            <span className="font-light text-[1rem] lg:text-[1.5rem]">
              {t('HOME_HERO_DEPLOYS')}
            </span>
          </div>
          <Separator className="w-[3px] bg-main-green mr-8 ml-12" />
          <div className="flex flex-col">
            <span className="font-semibold text-3xl lg:text-4xl lg:font-normal">+40M</span>
            <span className="font-light text-base lg:text-2xl">{t('HOME_HERO_SERVES')}</span>
          </div>
        </div>
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.006}px, -${offsetY * 0.006}px)` }}
        className="selectDisable sm:hidden absolute w-[30.3rem] h-[20.3rem] right-[-18rem] top-[-0.5rem] duration-200"
      >
        <Image
          src="/assets/home/hero-background-scribbles-sm.svg"
          alt="hero-background-scribbles-sm"
          layout="fill"
          priority
        />
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.035}px, ${offsetY * 0.035}px)` }}
        className="selectDisable sm:hidden absolute w-[27rem] h-[15.3rem] right-[-16.5rem] top-[3rem] duration-200"
      >
        <Image
          src="/assets/home/hero-background-circles-sm.svg"
          alt="hero-background-circles-sm"
          layout="fill"
          priority
        />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.006}px, -${offsetY * 0.006}px)` }}
        className="selectDisable hidden sm:inline absolute w-[30.3rem] h-[20.3rem] lg:w-[48.3rem] lg:h-[38.3rem] 2xl:w-[45.37rem] 2xl:h-[35.31rem] right-[-18.5rem] md:right-[-4.5rem] top-[1.5rem] lg:right-[-14rem] xl:right-[-2.5rem] lg:top-[-5.5rem] 2xl:top-[4rem] 2xl:right-[-7rem] duration-200"
      >
        <Image
          src="/assets/home/hero-background-scribbles.svg"
          alt="hero-background-scribbles"
          layout="fill"
          priority
        />
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.035}px, ${offsetY * 0.035}px)` }}
        className="selectDisable hidden sm:inline absolute w-[15rem] h-[15rem] lg:w-[28.12rem] lg:h-[25.5rem] 2xl:w-[28.62rem] 2xl:h-[25.5rem] right-[-11.5rem] md:right-[2rem] top-[5rem] lg:right-[-6rem] xl:right-[4rem] lg:top-[2rem] 2xl:top-[9.5rem] 2xl:right-[-2rem] duration-200"
      >
        <Image
          src="/assets/home/hero-background-circles.svg"
          alt="hero-background-circles"
          layout="fill"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
