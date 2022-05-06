import { Separator } from '@radix-ui/react-separator';
import { useTranslation } from 'react-i18next';
import LearnMore from './LearnMore';

const SectionTechnology = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-end items-end px-5 py-20">
      <div className="flex flex-row justify-end items-center mb-9 child:duration-500">
        <div className="justify-end flex flex-col space-y-3">
          <h2 className="text-[#D9D9D9] font-light text-sm lg:text-4xl mx-5 text-right">
            {t('HOME_TECHNOLOGY_SUBTITLE')}
          </h2>
          <h2 className="text-[#D9D9D9] font-extrabold text-4xl lg:text-6xl mx-5 text-right">
            {t('HOME_TECHNOLOGY_TITLE')}
          </h2>
        </div>
        <Separator className="h-20 lg:h-28 w-[0.4rem] lg:w-2 xl:w-2 2xl:w-[0.45rem] bg-main-green" />
      </div>
      <p className="text-white font-normal text-base text-right mb-3 lg:mb-6 2xl:mb-10 lg:text-xl max-w-xl lg:max-w-2xl 2xl:max-w-3xl duration-500 ">
        {t('HOME_TECHNOLOGY_DESCRIPTION')}
      </p>
      <LearnMore />
    </div>
  );
};

export default SectionTechnology;
