import Image from 'next/image';
import { useTranslation, Trans } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="flex text-white relative mb-14 lg:mb-4 mt-14 md:mt-24 2xl:mt-6 lg:mt-auto md:px-16 lg:px-0 duration-500">
      <div className="w-full flex flex-col lg:flex-row mb-4 lg:justify-between ">
        <div className="z-10 flex flex-col md:w-[34rem] lg:w-[32rem] xl:w-[40rem]">
          <h1 className="leading-normal text-[2.5rem] xl:text-[3.8rem] font-extrabold mb-5 duration-500">
            {t('GOVERNANCE_HERO_TITLE1')}
            <span className="text-main-green font-extrabold">{t('GOVERNANCE_HERO_TITLE2')}</span>
          </h1>
          <p className="text-base lg:text-xl 2xl:text-[1.35rem] font-normal mb-16">
            <Trans>{t('GOVERNANCE_HERO_DESCRIPTION1')}</Trans>
          </p>
        </div>
        <div className="z-10 flex flex-col md:items-center lg:items-end">
          <p className="leading-normal md:leading-[3.5rem] lg:leading-[3.2rem] 2xl:leading-[3.8rem] text-[2rem] md:text-4xl xl:text-[2.5rem] font-light md:text-center lg:text-right whitespace-nowrap mb-10 lg:mb-6 2xl:mb-8 duration-500">
            <Trans>{t('GOVERNANCE_HERO_DESCRIPTION2')}</Trans>
          </p>
          <div className="z-10 flex space-x-4 child:font-medium">
            <a href="https://governance.stackos.io/" target="_blank" rel="noreferrer">
              <button
                type="button"
                className="bg-main-green text-main-blue lg:text-lg rounded-md px-9 py-3 lg:px-10 lg:py-4 shadow-[0_0_17px_3px_rgba(17,24,39,0.5)]"
              >
                {t('GOVERNANCE_HERO_BUTTON1')}
              </button>
            </a>
          </div>
        </div>
        <div className="absolute w-[14.5rem] h-[12.5rem] right-[-2rem] top-[6.2rem] md:right-[9.8rem] md:top-[5.5rem] lg:right-[23rem] lg:top-[5.5rem] xl:right-[22rem] xl:top-[7.5rem] 2xl:right-[35rem] 2xl:top-[8.5rem] duration-500">
          <Image src="/assets/governance/circle-1.svg" alt="circle 1" layout="fill" priority />
        </div>
        <div className="absolute w-[12.8rem] h-[12.8rem] left-[-4rem] top-[21rem] md:left-auto md:right-[27rem] md:top-[22rem] lg:right-[5rem] lg:top-[13.5rem] xl:right-[5.5rem] xl:top-[17rem] 2xl:right-[14rem] 2xl:top-[18.5rem] duration-500">
          <Image src="/assets/governance/circle-2.svg" alt="circle 2" layout="fill" priority />
        </div>
        <div className="absolute w-[12.8rem] h-[12.8rem] right-[-10rem] top-[22.2rem] md:right-[2rem] lg:right-[-7.5rem] lg:top-[22.5rem] xl:right-[-8rem] xl:top-[23rem] 2xl:right-[0.5rem] 2xl:top-[24rem] duration-500">
          <Image src="/assets/governance/circle-3.svg" alt="circle 3" layout="fill" priority />
        </div>
        <div className="absolute w-[3rem] h-[3rem] right-[22rem] top-[100rem] lg:right-[22rem] lg:top-[19.5rem] xl:right-[22rem] xl:top-[23rem] 2xl:right-[33.5rem] 2xl:top-[26rem] duration-500">
          <Image src="/assets/governance/circle-4.svg" alt="circle 3" layout="fill" priority />
        </div>
      </div>

      {/* <div className="absolute w-[30.3rem] h-[20.3rem] lg:w-[48.3rem] lg:h-[38.3rem] 2xl:w-[58.3rem] 2xl:h-[48.3rem] right-[-7.5rem] md:right-[-3rem] lg:right-[-7.5rem] xl:right-[1rem] lg:top-[-3.5rem] 2xl:top-[-1.5rem] duration-500"> */}
      {/* <Image
          src="/assets/home/hero-background.svg"
          alt="hero background"
          layout="fill"
          priority
        /> */}
      {/* </div> */}
    </div>
  );
};

export default HeroSection;
