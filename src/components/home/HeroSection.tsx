import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { Separator } from '@radix-ui/react-separator';
import titleData from './helpers/hero-titles.json';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="flex text-white relative mt-16 lg:mt-24 2xl:mt-28">
      <div className="z-10 flex flex-col">
        <div>
          <h1 className="leading-none text-4xl lg:text-6xl font-extrabold">
            {t('HOME_HERO_TITLE')}
            <Lottie loop autoplay animationData={titleData} height={70} width="100%" />
          </h1>
        </div>
        <span className="text-base lg:text-xl font-normal my-10">
          {t('HOME_HERO_SUBTITLE1')}
          <br />
          {t('HOME_HERO_SUBTITLE2')}
        </span>
        <div className="flex space-x-4 child:font-medium">
          <button
            type="button"
            className="bg-main-green text-main-blue lg:text-lg rounded-md px-9 py-3 lg:px-10 lg:py-4"
          >
            {t('HOME_HERO_BUTTON1')}
          </button>
          <button
            type="button"
            className="bg-main-green text-main-blue lg:text-lg rounded-md px-9 py-3 lg:px-10 lg:py-4"
          >
            {t('HOME_HERO_BUTTON2')}
          </button>
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
      <div className="sm:hidden absolute w-[30.3rem] h-[20.3rem] lg:w-[48.3rem] lg:h-[38.3rem] 2xl:w-[58.3rem] 2xl:h-[48.3rem] right-[-9.5rem] md:right-[-4.5rem] top-[-0.5rem] lg:right-[-14rem] xl:right-[-2.5rem] lg:top-[-5.5rem] 2xl:top-[-7rem] 2xl:right-[-7rem] duration-500">
        <Image
          src="/assets/home/hero-background-sm.svg"
          alt="hero background"
          layout="fill"
          priority
        />
      </div>
      <div className="hidden sm:inline absolute w-[30.3rem] h-[20.3rem] lg:w-[48.3rem] lg:h-[38.3rem] 2xl:w-[58.3rem] 2xl:h-[48.3rem] right-[-9.5rem] md:right-[-4.5rem] top-[-0.5rem] lg:right-[-14rem] xl:right-[-2.5rem] lg:top-[-5.5rem] 2xl:top-[-7rem] 2xl:right-[-7rem] duration-500">
        <Image
          src="/assets/home/hero-background.svg"
          alt="hero background"
          layout="fill"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
