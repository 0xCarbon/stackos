import Image from 'next/image';
import { Trans, useTranslation } from 'react-i18next';
import ExplainCard from '../ExplainCard';

const ExplainSection = ({ offsetY }: { offsetY: number }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col text-white relative md:px-16 lg:px-0">
      <div className="z-10 flex flex-col lg:flex-row mb-24 lg:justify-between w-full">
        <div className="flex relative flex-col sm:mr-20 xl:w-[42.3rem] 2xl:w-[47rem]">
          <div>
            <h1 className="leading-normal text-[2.5rem] xl:text-[3.5rem] font-extrabold mb-10">
              {t('GOVERNANCE_EXPLAIN_TITLE')}
            </h1>
          </div>
          <span className="lg:leading-[2rem] text-base font-normal xl:text-xl text-justify">
            <Trans>{t('GOVERNANCE_EXPLAIN_DESCRIPTION')}</Trans>
          </span>
        </div>
        <div className="flex flex-col lg:mt-20">
          <h2 className="leading-normal text-[2.25rem] text-main-green font-extrabold mb-8">
            {t('GOVERNANCE_EXPLAIN_SUBTITLE')}
          </h2>
          <div className="flex justify-between lg:text-xl flex-col h-56 md:h-64 lg:h-[19.5rem] lg:w-[22.5rem]">
            <ExplainCard
              iconName="annotation"
              description={t('GOVERNANCE_EXPLAIN_CARD_DESCRIPTION1')}
            />
            <ExplainCard
              iconName="annotation"
              description={t('GOVERNANCE_EXPLAIN_CARD_DESCRIPTION2')}
            />
            <ExplainCard iconName="bolt" description={t('GOVERNANCE_EXPLAIN_CARD_DESCRIPTION3')} />
          </div>
        </div>
        <div
          style={{ transform: `translate(${offsetY * 0.03}px, ${offsetY * 0.03}px)` }}
          className="absolute w-[30rem] h-[25rem] right-[11rem] top-[30rem] md:right-[4.5rem] md:top-[25rem] lg:right-[-13.5rem] lg:top-[10rem] xl:right-[-14.5rem] xl:top-[8rem] 2xl:right-[-3.5rem] 2xl:top-[6rem] duration-300"
        >
          <Image src="/assets/governance/curves-1.svg" alt="curves" layout="fill" priority />
        </div>
      </div>
    </div>
  );
};
export default ExplainSection;
