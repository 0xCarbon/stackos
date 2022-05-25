import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Card, LearnMore } from '@/components';

const DevelopersSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full flex flex-col justify-center items-center text-center py-20 mt-[13rem] sm:mt-[16rem] md:mt-[30rem] lg:mt-[40rem] xl:mt-[57rem]">
      <div className="z-10 flex flex-col justify-center items-center">
        <h2 className="text-[#F4F4F4] font-extrabold text-4xl lg:text-6xl mb-9">
          {t('HOME_DEVELOPERS_TITLE')}
        </h2>
        <span className="text-white font-normal text-base max-w-md lg:max-w-lg 2xl:max-w-xl mb-3">
          {t('HOME_DEVELOPERS_DESCRIPTION')}
        </span>
        <LearnMore />
        <div className="mt-16 flex flex-col justify-center items-center md:flex-row child:mb-10 child:md:mx-4 child:lg:mx-28 child:xl:mx-28 child:2xl:mx-28">
          <Card
            src="/assets/home/lorem.svg"
            title={t('HOME_DEVELOPERS_CARD_TITLE')}
            subtitle={t('HOME_DEVELOPERS_CARD_SUBTITLE1')}
          />
          <Card
            src="/assets/home/ipsum.svg"
            title={t('HOME_DEVELOPERS_CARD_TITLE')}
            subtitle={t('HOME_DEVELOPERS_CARD_SUBTITLE2')}
          />
        </div>
        <div className="lg:hidden absolute w-[22.75rem] h-[24.75rem] left-[-8rem] top-[5rem] duration-500">
          <Image
            src="/assets/home/developers-background1-sm.svg"
            alt="technology background"
            layout="fill"
          />
        </div>
      </div>
      <div className="md:hidden absolute w-[19.87rem] h-[17.43rem] right-[-4rem] top-[37rem] duration-500">
        <Image
          src="/assets/home/developers-background2-sm.svg"
          alt="technology background"
          layout="fill"
        />
      </div>
      <div className="lg:hidden absolute w-[17.5rem] h-[18.25rem] right-[-8rem] top-[50rem] md:right-[-2.8rem] md:top-[46.5rem] duration-500">
        <Image
          src="/assets/home/developers-background3-sm.svg"
          alt="technology background"
          layout="fill"
        />
      </div>
      <div className="md:hidden absolute w-[18.62rem] h-[19rem] right-[-1.4rem] top-[72rem] md:top-[46.5rem] duration-500">
        <Image
          src="/assets/home/developers-background4-sm.svg"
          alt="technology background"
          layout="fill"
        />
      </div>
      <div className="hidden md:inline lg:hidden absolute w-[29rem] h-[19rem] left-[-1.4rem] top-[37rem] duration-500">
        <Image
          src="/assets/home/developers-background5-md.svg"
          alt="technology background"
          layout="fill"
        />
      </div>
      <div className="hidden lg:inline absolute w-[30rem] h-[30rem] left-[-22.4rem] xl:left-[-15rem] 2xl:left-[-7rem] top-[-10rem] duration-500">
        <Image
          src="/assets/home/developers-background-lg.svg"
          alt="technology background"
          layout="fill"
        />
      </div>
      <div className="hidden lg:inline absolute w-[50rem] h-[50rem] right-[-38.4rem] top-[-15rem] duration-500">
        <Image
          src="/assets/home/developers-background2-lg.svg"
          alt="technology background"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default DevelopersSection;
