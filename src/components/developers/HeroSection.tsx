import { Separator } from '@radix-ui/react-separator';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { StackOSButton } from '..';
import StackOSCarousel from '../StackOSCarousel';

const HeroSection = ({ offsetY }: { offsetY: number }) => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="text-white mt-12 lg:flex uration-500">
        <div className="max-w-md md:max-w-2xl lg:max-w-md xl:max-w-2xl mb-20 z-10">
          <h1 className="font-extrabold text-[2.5rem] xl:text-6xl mb-8">
            <span className="text-main-green ">{t('DEVELOPERS_HERO_SPAN_TITLE')}</span>
            {t('DEVELOPERS_HERO_TITLE')}
          </h1>
          <div className="text-xl font-normal">
            <p>{t('DEVELOPERS_HERO_DESCRIPTION1')}</p>
            <p>{t('DEVELOPERS_HERO_DESCRIPTION2')}</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:inline sm:items-center lg:ml-52 xl:ml-56 mb-24 z-10">
          <div className="flex">
            <Separator className="w-2 bg-main-green mr-7" />
            <div>
              <div className="text-[2.5rem] xl:text-[4.125rem] font-semibold">
                <span>{t('DEVELOPERS_HERO_NUMBER')}</span>
                <span className="text-main-green">+</span>
              </div>
              <span className="font-light text-2xl xl:text-3xl mt-3">
                {t('DEVELOPERS_HERO_DEPLOYS')}
              </span>
            </div>
          </div>
          <div className="mt-8 sm:ml-[6.5rem] lg:ml-0 lg:mt-11">
            <a href="https://docs.stackos.io" target="blank">
              <StackOSButton>{t('TECHNOLOGY_HERO_BUTTON')}</StackOSButton>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex md:justify-center">
        <StackOSCarousel />
      </div>

      <div
        style={{ transform: `translate(${offsetY * 0.035}px, -${offsetY * 0.035}px)` }}
        className="z-0 flex w-[28rem] h-[28rem] absolute top-[8rem] md:top-20 lg:-top-28 xl:-top-26 left-28 md:left-28 lg:left-[33rem] xl:left-[48rem] duration-300"
      >
        <Image src="/assets/developers/hero-bg-developers.svg" layout="fill" />
      </div>
    </div>
  );
};

export default HeroSection;
