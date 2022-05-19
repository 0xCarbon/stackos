import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import ExplainCard from '../ExplainCard';

const WhyStackOSSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative mt-28">
      <div className="z-10">
        <h2 className="text-white text-[2.5rem] lg:text-6xl font-extrabold">
          <span className="text-main-green">{t('DEVELOPERS_WHY_SPAN_TITLE')}</span>
          {t('DEVELOPERS_WHY_TITLE')}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 mt-10 child:my-4 lg:child:my-12 child:max-w-[15rem] md:child:max-w-[17rem] lg:child:max-w-[19rem] xl:child:max-w-[22rem] lg:child:mx-3 xl:child:mx-6 child:text-xl child:font-normal">
          <div>
            <ExplainCard description={t('DEVELOPERS_WHY_EXPLAIN1')} />
          </div>
          <div>
            <ExplainCard description={t('DEVELOPERS_WHY_EXPLAIN2')} />
          </div>
          <div>
            <ExplainCard description={t('DEVELOPERS_WHY_EXPLAIN3')} />
          </div>
          <div>
            <ExplainCard description={t('DEVELOPERS_WHY_EXPLAIN4')} />
          </div>
          <div>
            <ExplainCard description={t('DEVELOPERS_WHY_EXPLAIN5')} />
          </div>
          <div>
            <ExplainCard description={t('DEVELOPERS_WHY_EXPLAIN6')} />
          </div>
        </div>
      </div>
      <div className="absolute w-[47.5rem] h-40 -top-9 -right-40 lg:-right-80 xl:-right-56 2xl:-right-36">
        <Image src="/assets/developers/why-bg-developers.svg" layout="fill" />
      </div>
    </div>
  );
};

export default WhyStackOSSection;
