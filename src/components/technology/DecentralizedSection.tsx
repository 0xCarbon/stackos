import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { TiPlus } from 'react-icons/ti';
import { Card, LearnMore } from '@/components';

const DecentralizedSection = ({ offsetY }: { offsetY: number }) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full flex flex-col justify-center items-center text-center py-20">
      <div className="flex flex-col items-center z-10">
        <h2 className="text-[#F4F4F4] font-extrabold text-4xl lg:text-5xl mb-9">
          {t('TECHNOLOGY_DECENTRALIZED_TITLE')}
        </h2>
        <span className="text-white font-normal text-xl max-w-xl md:max-w-2xl mb-4">
          {t('TECHNOLOGY_DECENTRALIZED_DESCRIPTION')}
        </span>
        <LearnMore />
        <div className="mt-16 flex flex-col lg:flex-row justify-center items-center">
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
      <div
        style={{ transform: `translate(${offsetY * 0.006}px, ${offsetY * 0.006}px)` }}
        className="selectDisable hidden sm:inline absolute w-[66rem] h-[55rem] top-[24rem] right-[-22rem] md:w-[77rem] md:h-[70rem] md:right-[-21rem] lg:w-[120rem] xl:h-[80rem] xl:w-[130rem] lg:h-[70rem] lg:right-[-35rem] lg:top-[-6rem] xl:right-[-37rem] xl:top-[-12rem] duration-200"
      >
        <Image src="/assets/technology/layer4.svg" alt="layer4" layout="fill" />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.035}px, ${offsetY * 0.035}px)` }}
        className="selectDisable hidden md:inline absolute w-[7rem] h-[7rem] xl:w-[12.5rem] xl:h-[12.5rem] right-[-6rem] top-[60rem] md:right-[-4rem] lg:right-[-15rem] lg:top-[30rem]  duration-200"
      >
        <Image src="/assets/technology/layer5.svg" alt="layer5" layout="fill" />
      </div>
    </div>
  );
};

export default DecentralizedSection;
