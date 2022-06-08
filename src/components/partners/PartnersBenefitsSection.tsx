import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import BenefitsCard from './BenefitsCard';

const PartnersBenefitsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col mt-36 mb-[30rem] lg:mb-[7rem] text-center lg:text-left">
      <h1 className="text-main-green text-4xl lg:text-6xl font-extrabold">
        {t('PARTNERS_BENEFITS_TITLE')}
      </h1>
      <span className="text-[#F9FAFB] text-xl lg:text-4xl font-normal lg:font-light mt-5 mb-16 lg:mb-14">
        {t('PARTNERS_BENEFITS_DESCRIPTION')}
      </span>
      <div className="w-full flex justify-center items-center">
        <div className="text-[#E5E7EB] w-full text-left grid grid-cols-2 lg:grid-cols-3">
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
          <div className="col-start-2">
            <BenefitsCard
              tile="4"
              title={t('PARTNERS_BENEFITS_CARD4_TITLE')}
              description={t('PARTNERS_BENEFITS_CARD4_DESCRIPTION')}
            />
          </div>
          <div className="col-span-2 lg:col-auto">
            <BenefitsCard
              tile="5"
              title={t('PARTNERS_BENEFITS_CARD5_TITLE')}
              description={t('PARTNERS_BENEFITS_CARD5_DESCRIPTION')}
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden absolute w-[150rem] md:w-[150rem] h-[80rem] top-[27rem] -left-[60rem]  duration-200">
        <Image
          src="/assets/partners/benefits-bg-partners-sm.svg"
          alt="background image"
          layout="fill"
          priority
        />
      </div>
      <div className="hidden lg:inline absolute w-[60rem] xl:w-[65rem] 2xl:w-[80rem] h-[58rem] -left-[14rem] xl:-left-[10rem] 2xl:-left-[13rem] top-[5rem] xl:top-[4rem] duration-200">
        <Image
          src="/assets/partners/benefits-bg-partners-lg.svg"
          alt="background image"
          layout="fill"
          priority
        />
      </div>
    </div>
  );
};

export default PartnersBenefitsSection;
