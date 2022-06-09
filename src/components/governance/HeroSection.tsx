import Image from 'next/image';
import { useTranslation, Trans } from 'react-i18next';
import StackOSButton from '../StackOSButton';

const HeroSection = ({ offsetY }: { offsetY: number }) => {
  const { t } = useTranslation();

  return (
    <div className="flex text-white relative mb-14 lg:mb-4 mt-14 md:mt-24 2xl:mt-6 lg:mt-auto md:px-16 lg:px-0">
      <div className="w-full flex flex-col lg:flex-row mb-4 lg:justify-between ">
        <div className="z-10 flex flex-col md:w-[34rem] lg:w-[32rem] xl:w-[40rem]">
          <h1 className="leading-normal text-[2.5rem] xl:text-[3.5rem] font-extrabold mb-5">
            {t('GOVERNANCE_HERO_TITLE1')}
            <span className="text-main-green font-extrabold">{t('GOVERNANCE_HERO_TITLE2')}</span>
          </h1>
          <p className="text-base lg:text-xl 2xl:text-[1.35rem] max-w-xs sm:max-w-none font-normal mb-16">
            <Trans>{t('GOVERNANCE_HERO_DESCRIPTION1')}</Trans>
          </p>
        </div>
        <div className="z-10 flex flex-col md:items-center lg:items-end">
          <p className="leading-normal md:leading-[3.5rem] lg:leading-[3.2rem] 2xl:leading-[3.8rem] text-[2rem] md:text-4xl xl:text-[2.5rem] font-light md:text-center lg:text-right whitespace-nowrap mb-10 lg:mb-6 2xl:mb-8">
            <Trans>{t('GOVERNANCE_HERO_DESCRIPTION2')}</Trans>
          </p>
          <div className="z-10 flex space-x-4 child:font-medium">
            <a href="https://governance.stackos.io/" target="_blank" rel="noreferrer">
              <StackOSButton>{t('GOVERNANCE_HERO_BUTTON1')}</StackOSButton>
            </a>
          </div>
        </div>
        <div
          style={{ transform: `translate(${offsetY * 0.006}px, ${offsetY * 0.006}px)` }}
          className="selectDisable absolute w-[14.5rem] h-[12.5rem] right-[-2rem] top-[6.2rem] md:right-[9.8rem] md:top-[5.5rem] lg:right-[23rem] lg:top-[5.5rem] xl:right-[22rem] xl:top-[7.5rem] 2xl:right-[35rem] 2xl:top-[8.5rem] duration-300"
        >
          <Image src="/assets/governance/circle-1.svg" alt="circle 1" layout="fill" priority />
        </div>
        <div
          style={{ transform: `translate(${offsetY * 0.035}px, -${offsetY * 0.035}px)` }}
          className="selectDisable hidden sm:inline absolute w-[12.8rem] h-[12.8rem] left-[-4rem] top-[21rem] md:left-auto md:right-[27rem] md:top-[22rem] lg:right-[5rem] lg:top-[13.5rem] xl:right-[5.5rem] xl:top-[17rem] 2xl:right-[14rem] 2xl:top-[18.5rem] duration-300"
        >
          <Image src="/assets/governance/circle-2.svg" alt="circle 2" layout="fill" priority />
        </div>
        <div
          style={{ transform: `translate(${offsetY * 0.006}px, ${offsetY * 0.006}px)` }}
          className="selectDisable absolute w-[12.8rem] h-[12.8rem] right-[-10rem] top-[22.2rem] md:right-[2rem] lg:right-[-7.5rem] lg:top-[22.5rem] xl:right-[-8rem] xl:top-[23rem] 2xl:right-[0.5rem] 2xl:top-[24rem] duration-300"
        >
          <Image src="/assets/governance/circle-3.svg" alt="circle 3" layout="fill" priority />
        </div>
        <div
          style={{ transform: `translate(-${offsetY * 0.01}px, ${offsetY * 0.01}px)` }}
          className="selectDisable absolute w-[3rem] h-[3rem] right-[22rem] top-[130rem] lg:right-[22rem] lg:top-[19.5rem] xl:right-[22rem] xl:top-[23rem] 2xl:right-[33.5rem] 2xl:top-[26rem] duration-300"
        >
          <Image src="/assets/governance/circle-4.svg" alt="circle 3" layout="fill" priority />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
