import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Separator } from '@radix-ui/react-separator';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="flex text-white relative mt-16 lg:mt-40 2xl:mt-44">
      <div className="z-10 flex flex-col">
        <div>
          <h1 className="leading-none text-4xl lg:text-6xl font-extrabold">
            {t('HOME_HERO_TITLE1')}
            <br />
            <span className="text-main-green font-extrabold">{t('HOME_HERO_TITLE2')}</span>
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
      <div className="absolute w-[30.3rem] h-[20.3rem] lg:w-[48.3rem] lg:h-[38.3rem] 2xl:w-[58.3rem] 2xl:h-[48.3rem] right-[-7.5rem] md:right-[-3rem] lg:right-[-7.5rem] xl:right-[1rem] lg:top-[-3.5rem] 2xl:top-[-1.5rem] duration-500">
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
