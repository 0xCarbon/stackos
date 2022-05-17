import { Separator } from '@radix-ui/react-separator';
import { useTranslation } from 'react-i18next';
import { StackOSButton } from '..';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white mt-12">
      <div className="max-w-md mb-20">
        <h1 className="font-extrabold text-[2.5rem] mb-8">
          <span className="text-main-green ">{t('DEVELOPERS_HERO_SPAN_TITLE')}</span>
          {t('DEVELOPERS_HERO_TITLE')}
        </h1>
        <div className="text-xl font-normal">
          <p>{t('DEVELOPERS_HERO_DESCRIPTION1')}</p>
          <p>{t('DEVELOPERS_HERO_DESCRIPTION2')}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex">
          <Separator className="w-2 bg-main-green mr-7" />
          <div>
            <div className="text-[2.5rem] font-semibold">
              <span>{t('DEVELOPERS_HERO_NUMBER')}</span>
              <span className="text-main-green">+</span>
            </div>
            <span className="font-light text-2xl mt-3">{t('DEVELOPERS_HERO_DEPLOYS')}</span>
          </div>
        </div>
        <div className="ml-[6.5rem]">
          <StackOSButton>{t('TECHNOLOGY_HERO_BUTTON')}</StackOSButton>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
