import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col mt-20">
      <h1 className="text-white text-4xl lg:text-6xl font-extrabold">
        <span className="text-main-green">{t('PARTNERS_HERO_SPAN_TITLE')}</span>
        {t('PARTNERS_HERO_TITLE')}
      </h1>
      <span className="text-white font-normal text-xl lg:text-4xl mb-20 lg:mb-16 mt-8 lg:mt-9 max-w-[15rem] lg:max-w-[36rem]">
        {t('PARTNERS_HERO_DESCRIPTION')}
      </span>
      <div className="flex">
        <button
          type="button"
          className="bg-main-green font-medium text-lg text-main-blue rounded-md py-4 px-6 lg:px-10"
        >
          {t('PARTNERS_HERO_BUTTON')}
        </button>
      </div>
      <div className="absolute w-[30rem] lg:w-[40rem] h-[20rem] lg:h-[58rem] top-10 lg:-top-[20rem] -right-60 sm:-right-14 md:right-14 lg:left-[40rem] duration-500">
        <Image src="/assets/partners/hero-bg-partners.svg" alt="background image" layout="fill" />
      </div>
    </div>
  );
};

export default HeroSection;
