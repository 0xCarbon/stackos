import { Separator } from '@radix-ui/react-separator';
import { useTranslation } from 'react-i18next';
import { LearnMore } from '@/components';
import ExplainCard from '../ExplainCard';

const TokenSection = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-start py-20">
      <div className="flex flex-row justify-start items-center mb-9 child:duration-500">
        <Separator className="h-10 lg:h-14 w-[0.4rem] lg:w-2 xl:w-2 2xl:w-[0.45rem] bg-main-green" />
        <h2 className="text-[#FFFFFF] font-extrabold text-4xl lg:text-6xl mx-5">
          {t('HOME_TOKEN_TITLE')}
        </h2>
      </div>
      <p className="text-white font-normal text-base lg:text-xl xl:text-xl 2xl:text-xl max-w-xl lg:max-w-2xl xl:max-w-2xl 2xl:max-w-3xl mb-3 lg:mb-6 2xl:mb-10 duration-500">
        {t('HOME_TOKEN_DESCRIPTION')}
      </p>
      <LearnMore />

      <div className="flex flex-col justify-around h-full md:h-[20rem] lg:h-[27rem]">
        <div className="flex flex-row mt-20 2xl:mt-16 flex-wrap md:h-30 lg:h-44 md:space-x-16 2xl:space-x-32">
          <div className="w-[16rem] lg:w-[18.8rem] xl:w-[21.8rem] mb-10">
            <ExplainCard iconName="globe" description={t('HOME_TOKEN_NOTE_DESCRIPTION')} />
          </div>
          <div className="w-[16rem] lg:w-[18.8rem] xl:w-[21.8rem] mb-10">
            <ExplainCard iconName="annotation" description={t('HOME_TOKEN_NOTE_DESCRIPTION')} />
          </div>
        </div>

        <div className="flex flex-row flex-wrap md:h-30 lg:h-44 md:space-x-16 2xl:space-x-32">
          <div className="w-[16rem] lg:w-[18.8rem] xl:w-[21.8rem] mb-10">
            <ExplainCard iconName="bolt" description={t('HOME_TOKEN_NOTE_DESCRIPTION')} />
          </div>
          <div className="w-[16rem] lg:w-[18.8rem] xl:w-[21.8rem] mb-10">
            <ExplainCard iconName="bolt" description={t('HOME_TOKEN_NOTE_DESCRIPTION')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenSection;
