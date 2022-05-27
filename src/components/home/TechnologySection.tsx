import { Separator } from '@radix-ui/react-separator';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { LearnMore } from '@/components';

const TechnologySection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col justify-end items-end mt-5 lg:mt-32 py-20">
      <div className="flex flex-row justify-end items-center mb-9 child:duration-500 z-10">
        <div className="justify-end flex flex-col space-y-3">
          <h2 className="text-[#D9D9D9] font-light text-sm lg:text-4xl mx-5 text-right">
            {t('HOME_TECHNOLOGY_SUBTITLE')}
          </h2>
          <h2 className="text-[#D9D9D9] font-extrabold text-[2.5rem] lg:text-6xl mx-5 text-right">
            {t('HOME_TECHNOLOGY_TITLE')}
          </h2>
        </div>
        <Separator className="h-20 lg:h-28 w-[0.4rem] lg:w-2 xl:w-2 2xl:w-[0.45rem] bg-main-green" />
      </div>
      <div className="max-w-[22rem] lg:max-w-[24rem] xl:max-w-[39.5rem] z-10">
        <p className="text-white font-normal text-base text-right mb-3 lg:mb-6 2xl:mb-10 lg:text-xl max-w-xl lg:max-w-2xl 2xl:max-w-3xl duration-500 ">
          {t('HOME_TECHNOLOGY_DESCRIPTION')}
        </p>
      </div>
      <LearnMore />
      <div className="md:hidden absolute w-[17rem] h-[18rem] left-[-5rem]  top-[-2rem]  duration-500">
        <Image
          src="/assets/home/technology-background1-sm.svg"
          alt="technology background"
          layout="fill"
        />
      </div>
      <div className="lg:hidden absolute w-[15rem] h-[21rem] left-[-10rem] top-[17rem]  duration-500">
        <Image
          src="/assets/home/technology-background2-sm.svg"
          alt="technology background"
          layout="fill"
        />
      </div>
      <div className="hidden md:inline lg:hidden absolute w-[2.37rem] h-[2.37rem] left-[6rem] top-[16rem]  duration-500">
        <Image
          src="/assets/home/technology-background2-md.svg"
          alt="technology background"
          layout="fill"
        />
      </div>
      <div className="hidden md:inline lg:hidden absolute w-[0.7rem] h-[0.7rem] left-[15rem] top-[16rem]  duration-500">
        <Image
          src="/assets/home/technology-background3-md.svg"
          alt="technology background"
          layout="fill"
        />
      </div>
      <div className="absolute flex w-[18.75rem] h-[16.87rem] top-[30rem] md:w-[20rem] md:h-[18rem] md:top-[7.5rem] md:right-[22rem] lg:w-[26rem] lg:h-[24rem] lg:right-[30rem] xl:w-[29.5rem] xl:h-[27rem] xl:right-[50rem] mx-auto right-0 left-0 duration-500">
        <Image src="/assets/home/diagram.svg" alt="technology background" layout="fill" priority />
      </div>
    </div>
  );
};

export default TechnologySection;
