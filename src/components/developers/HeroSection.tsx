import { Separator } from '@radix-ui/react-separator';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { StackOSButton } from '..';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative text-white mt-12 lg:flex">
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
      <div className="flex lg:inline items-center lg:ml-52 xl:ml-56 z-10">
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
        <div className="ml-[6.5rem] lg:ml-0 lg:mt-11">
          <StackOSButton>{t('TECHNOLOGY_HERO_BUTTON')}</StackOSButton>
        </div>
      </div>
      <div className="flex w-[31.6rem] h-[31.6rem] absolute top-[5rem] md:top-6 lg:-top-28 xl:-top-26 left-16 md:left-16 lg:left-[29rem] xl:left-[45.5rem]">
        <Image src="/assets/developers/hero-bg-developers.svg" layout="fill" />
      </div>
    </div>
  );
};

export default HeroSection;
