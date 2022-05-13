import { useTranslation } from 'react-i18next';
import { TiPlus } from 'react-icons/ti';
import { Card, LearnMore } from '@/components';

const DecentralizedSection = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col justify-center items-center text-center py-20">
      <h2 className="text-[#F4F4F4] font-extrabold text-4xl lg:text-6xl mb-9">
        {t('TECHNOLOGY_DECENTRALIZED_TITLE')}
      </h2>
      <span className="text-white font-normal text-xl max-w-xl md:max-w-2xl mb-4">
        {t('TECHNOLOGY_DECENTRALIZED_DESCRIPTION')}
      </span>
      <LearnMore />
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <Card
          src="/assets/home/ipsum.svg"
          title={t('TECHNOLOGY_DECENTRALIZED_CARD1')}
          subtitle={t('TECHNOLOGY_DECENTRALIZED_CARD1_TEXT')}
        />
        <TiPlus className="text-4xl my-5 xl:mx-10" color="#AAFF00" />
        <Card
          src="/assets/home/phone.jpg"
          title={t('TECHNOLOGY_DECENTRALIZED_CARD2')}
          subtitle={t('TECHNOLOGY_DECENTRALIZED_CARD2_TEXT')}
        />
        <TiPlus className="text-4xl my-5 xl:mx-10" color="#AAFF00" />
        <Card
          src="/assets/home/lorem.svg"
          title={t('TECHNOLOGY_DECENTRALIZED_CARD3')}
          subtitle={t('TECHNOLOGY_DECENTRALIZED_CARD3_TEXT')}
        />
      </div>
    </div>
  );
};

export default DecentralizedSection;
