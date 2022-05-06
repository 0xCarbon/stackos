import { useTranslation } from 'react-i18next';
import { Separator } from '@radix-ui/react-separator';
import LearnMore from './LearnMore';

const SectionGovernance = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-start mx-5 py-20">
      <div className="flex flex-row justify-start items-center mb-9">
        <Separator className="h-9 w-[5px] lg:w-2 lg:h-14 2xl:w-[10px] 2xl:h-16 bg-main-green" />
        <h2 className="text-[#D9D9D9] font-extrabold text-4xl lg:text-6xl mx-5">
          {t('HOME_GOVERNANCE_TITLE')}
        </h2>
      </div>
      <span className="text-white font-normal text-base lg:text-xl max-w-xl lg:max-w-2xl 2xl:max-w-3xl mb-3">
        {t('HOME_GOVERNANCE_DESCRIPTION')}
      </span>
      <LearnMore />
    </div>
  );
};

export default SectionGovernance;
