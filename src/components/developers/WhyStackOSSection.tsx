import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import ExplainCard, { Icons } from '../ExplainCard';

const WhyStackOSSection = ({ offsetY }: { offsetY: number }) => {
  const { t } = useTranslation();

  const explainCards = [
    {
      description: 'DEVELOPERS_WHY_EXPLAIN1',
      iconName: 'rocket',
    },
    {
      description: 'DEVELOPERS_WHY_EXPLAIN2',
      iconName: 'monitor',
    },
    {
      description: 'DEVELOPERS_WHY_EXPLAIN3',
      iconName: 'graphs',
    },
    {
      description: 'DEVELOPERS_WHY_EXPLAIN4',
      iconName: 'docker',
    },
    {
      description: 'DEVELOPERS_WHY_EXPLAIN5',
      iconName: 'money',
    },
    {
      description: 'DEVELOPERS_WHY_EXPLAIN6',
      iconName: 'anonymous',
    },
  ];

  return (
    <div className="relative mt-28 mb-32">
      <div className="z-10">
        <h2 className="z-10 text-white text-[2.5rem] lg:text-6xl font-extrabold">
          <span className="text-main-green">{t('DEVELOPERS_WHY_SPAN_TITLE')}</span>
          {t('DEVELOPERS_WHY_TITLE')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 child:my-4 lg:child:my-12 child:max-w-[17rem] sm:child:max-w-[15rem] md:child:max-w-[17rem] lg:child:max-w-[19rem] xl:child:max-w-[22rem] lg:child:mx-3 xl:child:mx-6 child:text-xl child:font-normal">
          {explainCards.map((item) => (
            <div key={item.iconName}>
              <ExplainCard
                description={t(item.description)}
                iconName={item.iconName as keyof Icons}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        style={{ transform: `translateX(-${offsetY * 0.006}px` }}
        className="selectDisable absolute w-[60rem] h-56 -top-9 right-[-30rem] lg:-right-80 xl:-right-56 2xl:-right-36 duration-300"
      >
        <Image
          alt="why-bg-developers"
          src="/assets/developers/why-bg-developers.svg"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default WhyStackOSSection;
