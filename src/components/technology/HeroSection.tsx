import { useTranslation } from 'react-i18next';
import ZeroButton from '@/components/ZeroButton';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-start py-16 lg:flex-row lg:child:flex-1">
      <div className="lg:flex lg:flex-col mb-14">
        <div className="flex flex-row justify-start items-center mb-9 lg:mb-12">
          <h2 className="text-white font-extrabold text-4xl lg:text-6xl">
            {t('TECHNOLOGY_HERO_TITLE')}
          </h2>
        </div>
        <span className="text-white font-normal text-xl">{t('TECHNOLOGY_HERO_DESCRIPTION')}</span>
      </div>
      <div className="lg:hidden flex flex-row justify-between items-end">
        <ZeroButton>{t('TECHNOLOGY_HERO_BUTTON')}</ZeroButton>
        <span className="text-white font-light text-4xl">{t('TECHNOLOGY_HERO_SUBTITLE')}</span>
      </div>
      <div className="hidden lg:flex lg:flex-col lg:items-end">
        <span className="text-white font-light text-5xl mt-4 mb-14">
          {t('TECHNOLOGY_HERO_SUBTITLE')}
        </span>
        <ZeroButton>{t('TECHNOLOGY_HERO_BUTTON')}</ZeroButton>
      </div>
    </div>
  );
};

export default HeroSection;
