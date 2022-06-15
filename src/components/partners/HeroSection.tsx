import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import StackOSButton from '../StackOSButton';

const HeroSection = ({ offsetY }: { offsetY: number }) => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col mt-20">
      <h1 className="z-10 text-white text-4xl lg:text-6xl font-extrabold">
        <span className="text-main-green">{t('PARTNERS_HERO_SPAN_TITLE')}</span>
        {t('PARTNERS_HERO_TITLE')}
      </h1>
      <span className="z-10 text-white font-normal text-xl lg:text-4xl mb-20 lg:mb-16 mt-8 lg:mt-9 max-w-[15rem] lg:max-w-[36rem]">
        {t('PARTNERS_HERO_DESCRIPTION')}
      </span>
      <div className="flex">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc0xmMUWd8NAuG5PvpR9LXcIB1KItQPLGyUPKxA-WOFHZeiKA/viewform"
          target="_blank"
          rel="noreferrer"
        >
          <StackOSButton>{t('PARTNERS_HERO_BUTTON')}</StackOSButton>
        </a>
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.006}px, ${offsetY * 0.006}px)` }}
        className="selectDisable absolute w-[20rem] lg:w-[25rem] h-[13rem] lg:h-[30rem] top-[8rem] lg:top-[-8rem] right-[-2rem] sm:-right-14 md:right-14 lg:left-[38rem] duration-300"
      >
        <Image src="/assets/partners/hero1.svg" alt="hero1" layout="fill" />
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.035}px, ${offsetY * 0.035}px)` }}
        className="selectDisable absolute w-[15rem] lg:w-[20rem] h-[15rem] lg:h-[28rem] top-[9rem] lg:top-[-2rem] right-[0rem] sm:-right-14 md:right-14 lg:left-[42rem] duration-300"
      >
        <Image src="/assets/partners/hero2.svg" alt="hero2" layout="fill" />
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.06}px, ${offsetY * 0.06}px)` }}
        className="selectDisable absolute w-[10rem] lg:w-[10rem] h-[8rem] lg:h-[20rem] top-[5rem] lg:top-[-8rem] right-[-2rem] sm:-right-14 md:right-[1rem] lg:left-[53rem] duration-300"
      >
        <Image src="/assets/partners/hero3.svg" alt="hero3" layout="fill" />
      </div>
    </div>
  );
};

export default HeroSection;
