import { Separator } from '@radix-ui/react-separator';
import { useTranslation } from 'react-i18next';
import { BiGlobe } from 'react-icons/bi';
import { HiOutlineAnnotation, HiOutlineLightningBolt } from 'react-icons/hi';
import LearnMore from './LearnMore';

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

      <div className="flex flex-row flex-wrap">
        <div className="home-token-notes-container">
          <div className="home-token-notes-square">
            <BiGlobe className="duration-500 text-[2rem] lg:text-[2.4rem]" color="#111827" />
          </div>
          <p className="home-token-notes-text">{t('HOME_TOKEN_NOTE_DESCRIPTION')}</p>
        </div>
        <div className="home-token-notes-container">
          <div className="home-token-notes-square">
            <HiOutlineAnnotation
              className="duration-500 text-[2rem] lg:text-[2.4rem]"
              color="#111827"
            />
          </div>
          <p className="home-token-notes-text">{t('HOME_TOKEN_NOTE_DESCRIPTION')}</p>
        </div>
      </div>

      <div className="flex flex-row flex-wrap">
        <div className="home-token-notes-container">
          <div className="home-token-notes-square">
            <HiOutlineLightningBolt
              className="duration-500 text-[2rem] lg:text-[2.4rem]"
              color="#111827"
            />
          </div>
          <p className="home-token-notes-text">{t('HOME_TOKEN_NOTE_DESCRIPTION')}</p>
        </div>
        <div className="home-token-notes-container">
          <div className="home-token-notes-square">
            <HiOutlineLightningBolt
              className="duration-500 text-[2rem] lg:text-[2.4rem]"
              color="#111827"
            />
          </div>
          <p className="home-token-notes-text">{t('HOME_TOKEN_NOTE_DESCRIPTION')}</p>
        </div>
      </div>
    </div>
  );
};

export default TokenSection;
