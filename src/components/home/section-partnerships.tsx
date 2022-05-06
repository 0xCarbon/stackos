import { Separator } from '@radix-ui/react-separator';
import { useTranslation } from 'react-i18next';
import LearnMore from './LoadMore';

const SectionPartnerShips = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-end items-end px-5 py-20">
      <div className="flex flex-row justify-end items-center mb-9 child:duration-500">
        <h2 className="text-[#D9D9D9] font-extrabold text-4xl lg:text-6xl mx-5">
          {t('HOME_PARTNERSHIPS_TITLE')}
        </h2>
        <Separator className="h-10 lg:h-14 w-[0.4rem] lg:w-2 xl:w-2 2xl:w-[0.45rem] bg-main-green" />
      </div>
      <p className="text-white font-normal text-base text-right mb-3 lg:mb-6 2xl:mb-10 lg:text-xl max-w-xl lg:max-w-2xl 2xl:max-w-3xl duration-500 ">
        {t('HOME_PARTNERSHIPS_DESCRIPTION')}
      </p>
      <LearnMore />
    </div>
  );
};

export default SectionPartnerShips;
