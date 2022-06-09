import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import BenefitsCard from './BenefitsCard';

const BenefitsSection = ({ offsetY }: { offsetY: number }) => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col mt-36 mb-[18rem] sm:mb-[21rem] lg:mb-[5rem] text-center lg:text-left">
      <h1 className="text-main-green text-4xl lg:text-5xl font-extrabold">
        {t('PARTNERS_BENEFITS_TITLE')}
      </h1>
      <span className="text-[#F9FAFB] text-xl lg:text-4xl font-normal lg:font-light mt-5 mb-16 lg:mb-14">
        {t('PARTNERS_BENEFITS_DESCRIPTION')}
      </span>
      <div className="z-10 w-full flex justify-center items-center">
        <div className="text-[#E5E7EB] w-full text-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <BenefitsCard
            tile="1"
            title={t('PARTNERS_BENEFITS_CARD1_TITLE')}
            description={t('PARTNERS_BENEFITS_CARD1_DESCRIPTION')}
          />
          <BenefitsCard
            tile="2"
            title={t('PARTNERS_BENEFITS_CARD2_TITLE')}
            description={t('PARTNERS_BENEFITS_CARD2_DESCRIPTION')}
          />
          <BenefitsCard
            tile="3"
            title={t('PARTNERS_BENEFITS_CARD3_TITLE')}
            description={t('PARTNERS_BENEFITS_CARD3_DESCRIPTION')}
          />
          <div className="sm:col-start-2">
            <BenefitsCard
              tile="4"
              title={t('PARTNERS_BENEFITS_CARD4_TITLE')}
              description={t('PARTNERS_BENEFITS_CARD4_DESCRIPTION')}
            />
          </div>
          <div className="sm:col-span-2 lg:col-auto">
            <BenefitsCard
              tile="5"
              title={t('PARTNERS_BENEFITS_CARD5_TITLE')}
              description={t('PARTNERS_BENEFITS_CARD5_DESCRIPTION')}
            />
          </div>
        </div>
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.006}px, ${offsetY * 0.006}px)` }}
        className="selectDisable opacity-80 absolute w-[49.375rem] lg:w-[41.625rem] xl:w-[65rem] h-[60rem] lg:h-[19.56rem] top-[59rem] sm:top-[34rem] lg:top-[20rem] xl:top-[20rem] left-[-9rem] md:left-[-2rem] lg:-left-[18rem] xl:-left-[25rem] duration-200"
      >
        <Image
          src="/assets/partners/benefits-bg-partners.svg"
          alt="benefits-bg-partners"
          layout="fill"
          priority
        />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.03}px, ${offsetY * 0.06}px)` }}
        className="selectDisable absolute w-[18.25rem] lg:w-[20rem] h-[13.25rem] lg:h-[15rem] top-[80rem] sm:top-[56rem] lg:top-[22rem] xl:top-[22rem] left-[16rem] md:left-[24rem] lg:-left-[6rem] xl:-left-[3rem] duration-200"
      >
        <Image src="/assets/partners/layer2.svg" alt="layer2" layout="fill" priority />
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.1}px, ${offsetY * 0.1}px)` }}
        className="selectDisable lg:hidden absolute w-[10.31rem] lg:w-[3rem] xl:w-[3rem] h-[10.31rem] lg:h-[58rem] top-[76rem] sm:top-[54rem] lg:top-[5rem] xl:top-[4rem] left-[-14rem] sm:left-[-10rem] md:left-[-4rem] lg:left-[8rem] xl:left-[10rem] duration-200"
      >
        <Image src="/assets/partners/layer3.svg" alt="layer3" layout="fill" priority />
      </div>
    </div>
  );
};

export default BenefitsSection;
