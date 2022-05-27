import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { TiPlus } from 'react-icons/ti';
import { Card, LearnMore } from '@/components';

const DecentralizedSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full flex flex-col justify-center items-center text-center py-20">
      <div className="z-10">
        <h2 className="text-[#F4F4F4] font-extrabold text-4xl lg:text-6xl mb-9">
          {t('TECHNOLOGY_DECENTRALIZED_TITLE')}
        </h2>
        <span className="text-white font-normal text-xl max-w-xl md:max-w-2xl mb-4">
          {t('TECHNOLOGY_DECENTRALIZED_DESCRIPTION')}
        </span>
        <LearnMore />
        <div className="mt-16 lg:mb-[30rem] flex flex-col lg:flex-row justify-center items-center">
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
      <div className="hidden sm:inline absolute w-[58rem] h-[55rem] top-[24rem] -right-64 md:w-[70rem] md:h-[70rem] md:right-[-10rem] lg:w-[80rem] lg:h-[70rem] lg:right-[-10rem] duration-500">
        <Image
          src="/assets/technology/technology-background2.svg"
          alt="technology background"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default DecentralizedSection;
