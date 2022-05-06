import { useTranslation } from 'react-i18next';
import { Card } from '@/components';
import LearnMore from './LearnMore';

const SectionDevelopers = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col justify-center items-center text-center py-20">
      <h2 className="text-[#F4F4F4] font-extrabold text-4xl lg:text-6xl mb-9">
        {t('HOME_DEVELOPERS_TITLE')}
      </h2>
      <span className="text-white font-normal text-base max-w-md lg:max-w-lg 2xl:max-w-xl mb-3">
        {t('HOME_DEVELOPERS_DESCRIPTION')}
      </span>
      <LearnMore />
      <div className="flex flex-col justify-center items-center md:flex-row child:mb-10">
        <Card
          src="/assets/home/lorem.svg"
          title={t('HOME_DEVELOPERS_CARD_TITLE')}
          subtitle={t('HOME_DEVELOPERS_CARD_SUBTITLE1')}
        />
        <Card
          src="/assets/home/ipsum.svg"
          title={t('HOME_DEVELOPERS_CARD_TITLE')}
          subtitle={t('HOME_DEVELOPERS_CARD_SUBTITLE2')}
        />
      </div>
    </div>
  );
};

export default SectionDevelopers;
