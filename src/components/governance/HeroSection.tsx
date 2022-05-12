import { useTranslation, Trans } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="flex text-white relative mt-14 md:mt-24 lg:mt-auto 2xl:mt-44 duration-500 md:px-16 lg:px-0">
      <div className="z-10 flex flex-col lg:flex-row mb-4">
        <div>
          <h1 className="leading-normal text-[2.5rem] font-extrabold mb-5">
            {t('GOVERNANCE_HERO_TITLE1')}
            <span className="text-main-green font-extrabold">{t('GOVERNANCE_HERO_TITLE2')}</span>
          </h1>
          <p className="text-base lg:text-xl font-normal mb-12">
            <Trans>{t('GOVERNANCE_HERO_DESCRIPTION1')}</Trans>
          </p>
        </div>
        <div className="flex flex-col md:items-center lg:items-end">
          <p className="mb-8 text-[2rem] font-light leading-normal md:text-center lg:text-right whitespace-nowrap">
            <Trans>{t('GOVERNANCE_HERO_DESCRIPTION2')}</Trans>
          </p>
          <div className="flex space-x-4 child:font-medium">
            <button
              type="button"
              className="bg-main-green text-main-blue lg:text-lg rounded-md px-9 py-3 lg:px-10 lg:py-4"
            >
              {t('GOVERNANCE_HERO_BUTTON1')}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute w-[30.3rem] h-[20.3rem] lg:w-[48.3rem] lg:h-[38.3rem] 2xl:w-[58.3rem] 2xl:h-[48.3rem] right-[-7.5rem] md:right-[-3rem] lg:right-[-7.5rem] xl:right-[1rem] lg:top-[-3.5rem] 2xl:top-[-1.5rem] duration-500">
        {/* <Image
          src="/assets/home/hero-background.svg"
          alt="hero background"
          layout="fill"
          priority
        /> */}
      </div>
    </div>
  );
};

export default HeroSection;
