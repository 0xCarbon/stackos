import { Trans, useTranslation } from 'react-i18next';
import ExplainCard from '../ExplainCard';

const ExplainSection = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col text-white relative mt-16 lg:mt-40 2xl:mt-44 md:px-16">
      <div className="z-10 flex flex-col mb-24">
        <div>
          <h1 className="leading-normal text-[2.5rem] font-extrabold mb-10">
            {t('GOVERNANCE_EXPLAIN_TITLE')}
          </h1>
        </div>
        <span className="text-base font-normal lg:text-xl mb-14 text-justify">
          <Trans>{t('GOVERNANCE_EXPLAIN_DESCRIPTION')}</Trans>
        </span>
        <h2 className="leading-normal text-[2.25rem] text-main-green font-extrabold mb-5">
          {t('GOVERNANCE_EXPLAIN_SUBTITLE')}
        </h2>
        <div>
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
    </div>
  );
};
export default ExplainSection;
