import { useTranslation } from 'react-i18next';
import Features from './Features';

const AgilitySection = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col justify-center items-center text-center py-20">
      <h2 className="text-[#F9FAFB] font-extrabold text-4xl lg:text-6xl mb-9">
        {t('TECHNOLOGY_AGILITY_TITLE')}
      </h2>
      <span className="text-white font-normal text-xl max-w-xl lg:max-w-2xl mb-14">
        {t('TECHNOLOGY_AGILITY_DESCRIPTION')}
      </span>
      <div className="flex flex-row child:flex-1">
        <div className="flex flex-col items-center w-full lg:hidden">
          <Features />
        </div>
        <div className="hidden lg:flex flex-col items-center w-full mr-12">
          <Features sliceStart={0} sliceEnd={3} />
        </div>
        <div className="hidden lg:flex flex-col items-center w-full ml-12">
          <Features sliceStart={3} sliceEnd={5} />
        </div>
      </div>
    </div>
  );
};

export default AgilitySection;
