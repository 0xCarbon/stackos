import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import StackOSButton from '@/components/StackOSButton';

const HeroSection = ({ offsetY }: { offsetY: number }) => {
  const { t } = useTranslation();

  return (
    <div className="relative flex mt-12 pb-16">
      <div className="z-10 flex flex-col justify-start lg:flex-row lg:child:flex-1">
        <div className="lg:flex lg:flex-col mb-14 ">
          <div className="flex flex-row justify-start items-center mb-9 lg:mb-12">
            <h2 className="z-10 text-white font-extrabold text-4xl lg:text-6xl">
              {t('TECHNOLOGY_HERO_TITLE')}
            </h2>
          </div>
          <span className="z-10 text-white font-normal text-xl">
            {t('TECHNOLOGY_HERO_DESCRIPTION')}
          </span>
        </div>
        <div className="z-10 lg:hidden flex flex-row justify-between items-end">
          <a href="https://docs.stackos.io" target="blank">
            <StackOSButton>{t('TECHNOLOGY_HERO_BUTTON')}</StackOSButton>
          </a>
          <span className="z-10 hidden sm:inline text-white font-light text-4xl">
            {t('TECHNOLOGY_HERO_SUBTITLE')}
          </span>
        </div>
        <div className="z-10 hidden lg:flex lg:flex-col lg:items-end">
          <span className="z-10 text-white font-light text-5xl mt-4 mb-14">
            {t('TECHNOLOGY_HERO_SUBTITLE')}
          </span>
          <a href="https://docs.stackos.io" target="blank">
            <StackOSButton>{t('TECHNOLOGY_HERO_BUTTON')}</StackOSButton>
          </a>
        </div>
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.006}px, ${offsetY * 0.006}px)` }}
        className="selectDisable absolute sm:w-[25rem] sm:h-[20rem] lg:w-[40rem] lg:h-[45rem] 2xl:w-[58.3rem] 2xl:h-[48.3rem] right-[-11rem] md:right-[-3rem] lg:right-[-10rem] xl:right-[1.5rem] 2xl:right-[-28rem] top-[20rem] lg:top-[0rem] 2xl:top-[-4.5rem] duration-200"
      >
        <Image
          draggable={false}
          src="/assets/technology/layer1.svg"
          alt="layer1"
          layout="fill"
          priority
        />
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.035}px, ${offsetY * 0.035}px)` }}
        className="selectDisable absolute sm:w-[18.18rem] sm:h-[15rem] lg:w-[29.8rem] lg:h-[24.75rem] 2xl:w-[58.3rem] 2xl:h-[48.3rem] right-[-11rem] md:right-[-3rem] lg:right-[-10rem] xl:right-[1.5rem] 2xl:right-[-28rem] top-[20rem] lg:top-[9rem] 2xl:top-[-4.5rem] duration-200"
      >
        <Image
          draggable={false}
          src="/assets/technology/layer2.svg"
          alt="layer2"
          layout="fill"
          priority
        />
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.01}px, ${offsetY * 0.01}px)` }}
        className="selectDisable absolute sm:w-[18.18rem] sm:h-[15rem] lg:w-[29.8rem] lg:h-[24.75rem] 2xl:w-[58.3rem] 2xl:h-[48.3rem] right-[-11rem] md:right-[-3rem] lg:right-[-10rem] xl:right-[1.5rem] 2xl:right-[-28rem] top-[20rem] lg:top-[9rem] 2xl:top-[-4.5rem] duration-200"
      >
        <Image
          draggable={false}
          src="/assets/technology/layer3.svg"
          alt="layer3"
          layout="fill"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
