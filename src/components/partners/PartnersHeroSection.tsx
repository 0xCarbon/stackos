import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const PartnersHeroSection = () => {
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
      <div className="lg:hidden absolute w-[30rem] h-[20rem] top-10 -right-14 md:right-14 duration-200">
        <Image
          src="/assets/partners/hero-bg-partners-sm.svg"
          alt="background image"
          layout="fill"
          priority
        />
      </div>
      <div className="hidden lg:inline absolute w-[40rem] h-[58rem] left-[40rem] -top-[20rem] duration-200">
        <Image
          src="/assets/partners/hero-bg-partners-lg.svg"
          alt="background image"
          layout="fill"
          priority
        />
      </div>
    </div>
  );
};

export default PartnersHeroSection;
