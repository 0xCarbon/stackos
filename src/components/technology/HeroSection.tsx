import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import StackOSButton from '@/components/StackOSButton';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex py-16">
      <div className="z-10 flex flex-col justify-start lg:flex-row lg:child:flex-1">
        <div className="lg:flex lg:flex-col mb-14">
          <div className="flex flex-row justify-start items-center mb-9 lg:mb-12">
            <h2 className="text-white font-extrabold text-4xl lg:text-6xl">
              {t('TECHNOLOGY_HERO_TITLE')}
            </h2>
          </div>
          <span className="text-white font-normal text-xl">{t('TECHNOLOGY_HERO_DESCRIPTION')}</span>
        </div>
        <div className="lg:hidden flex flex-row justify-between items-end">
          <StackOSButton>{t('TECHNOLOGY_HERO_BUTTON')}</StackOSButton>
          <span className="text-white font-light text-4xl">{t('TECHNOLOGY_HERO_SUBTITLE')}</span>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:items-end">
          <span className="text-white font-light text-5xl mt-4 mb-14">
            {t('TECHNOLOGY_HERO_SUBTITLE')}
          </span>
          <StackOSButton>{t('TECHNOLOGY_HERO_BUTTON')}</StackOSButton>
        </div>
      </div>
      <div className="absolute w-[30.3rem] h-[20.3rem] lg:w-[48.3rem] lg:h-[38.3rem] 2xl:w-[58.3rem] 2xl:h-[48.3rem] right-[-12rem] md:right-[-3rem] lg:right-[-30rem] xl:right-[-10rem] 2xl:right-[-1rem] lg:top-[-3.5rem] 2xl:top-[-4.5rem] duration-500">
        <Image
          draggable={false}
          src="/assets/technology/technology-background.svg"
          alt="technology background"
          layout="fill"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
