import { Trans, useTranslation } from 'react-i18next';
// import Image from 'next/image';
import { BiCheck } from 'react-icons/bi';
import { features } from './helpers';

const TradeSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex my-16">
      <div className="z-10 flex flex-col w-full justify-start">
        <div className="mb-24">
          <div className="flex flex-row justify-start items-center mb-9 lg:mb-12">
            <h1 className="text-main-green font-extrabold text-6xl">
              {t('TOKEN_TRADE_TITLE1')}
              <span className="text-white">{t('TOKEN_TRADE_TITLE2')}</span>
            </h1>
          </div>
          <div className="xl:flex xl:flex-row xl:child:flex-1 duration-500">
            <div className="xl:flex xl:flex-col">
              <p className="text-white font-normal text-xl max-w-md">
                {t('TOKEN_TRADE_DESCRIPTION')}
              </p>
            </div>
            <div className="hidden xl:flex xl:flex-col">
              <div className="flex flex-row justify-center lg:justify-end child:flex-1 duration-500">
                {features.slice(0, 2).map((item) => (
                  <div key={item.id} className="flex flex-col mb-16 px-5">
                    <div className="flex flex-row justify-start mb-3 items-baseline md:items-center md:min-w-max duration-500">
                      <BiCheck className="mr-3" color="#AAFF00" size={14} />
                      <span className="text-white font-bold text-lg">
                        <Trans>{item.title}</Trans>
                      </span>
                    </div>
                    <span className="text-white font-normal text-sm w-full max-w-xs ml-7">
                      {t(item.subtitle)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-row justify-center lg:justify-end child:flex-1 duration-500">
                {features.slice(2).map((item) => (
                  <div key={item.id} className="flex flex-col mb-16 px-5">
                    <div className="flex flex-row justify-start mb-3 items-baseline md:items-center md:min-w-max duration-500">
                      <BiCheck className="mr-3" color="#AAFF00" size={14} />
                      <span className="text-white font-bold text-lg">
                        <Trans>{item.title}</Trans>
                      </span>
                    </div>
                    <span className="text-white font-normal text-sm w-full max-w-xs ml-7">
                      {t(item.subtitle)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center lg:justify-end xl:hidden duration-500">
          {features.slice(0, 2).map((item) => (
            <div key={item.id} className="flex flex-col mb-16 px-5">
              <div className="flex flex-row justify-start mb-3 items-baseline md:items-center md:min-w-max duration-500">
                <BiCheck className="mr-3" color="#AAFF00" size={14} />
                <span className="text-white font-bold text-lg">
                  <Trans>{item.title}</Trans>
                </span>
              </div>
              <span className="text-white font-normal text-sm w-full max-w-xs ml-7">
                {t(item.subtitle)}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center lg:justify-end xl:hidden duration-500">
          {features.slice(2).map((item) => (
            <div key={item.id} className="flex flex-col mb-16  px-5">
              <div className="flex flex-row justify-start mb-3 items-baseline md:items-center md:min-w-max duration-500">
                <BiCheck className="mr-3" color="#AAFF00" size={14} />
                <span className="text-white font-bold text-lg">
                  <Trans>{item.title}</Trans>
                </span>
              </div>
              <span className="text-white font-normal text-sm w-full max-w-xs ml-7">
                {t(item.subtitle)}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="absolute w-[30.3rem] h-[20.3rem] lg:w-[48.3rem] lg:h-[38.3rem] 2xl:w-[58.3rem] 2xl:h-[48.3rem] right-[-12rem] md:right-[-3rem] lg:right-[-30rem] xl:right-[-10rem] 2xl:right-[-1rem] lg:top-[-3.5rem] 2xl:top-[-4.5rem] duration-500">
        <Image
          draggable={false}
          src="/assets/technology/technology-background.svg"
          alt="technology background"
          layout="fill"
          priority
        />
      </div> */}
    </div>
  );
};

export default TradeSection;
