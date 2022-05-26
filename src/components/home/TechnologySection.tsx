import { Separator } from '@radix-ui/react-separator';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { LearnMore } from '@/components';

const TechnologySection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col justify-end items-end mt-28 lg:mt-52 2xl:mt-56 py-20">
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
      <div className="max-w-[30rem] lg:max-w-2xl z-10">
        <p className="text-white font-normal text-base text-right mb-3 lg:mb-6 2xl:mb-10 lg:text-xl max-w-xl lg:max-w-2xl 2xl:max-w-3xl duration-500 ">
          {t('HOME_TECHNOLOGY_DESCRIPTION')}
        </p>
      </div>
      <LearnMore />
      <div className="md:hidden absolute w-[17rem] h-[18rem] left-[1rem]  top-[-2.8rem]  duration-500">
        <Image
          src="/assets/home/technology-background1-sm.svg"
          alt="technology background"
          layout="fill"
        />
      </div>
      <div className="hidden md:inline absolute w-[30.3rem] h-[20.3rem] left-[-5.5rem] xl:left-[4rem] top-[-0.5rem] duration-500">
        <Image
          src="/assets/home/technology-background1.svg"
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
      <div className="hidden lg:inline absolute w-[51.5rem] h-[41rem] left-[-10rem] top-[24rem] xl:top-[42rem] xl:left-[0rem] duration-500">
        <Image
          src="/assets/home/technology-background4-lg.svg"
          alt="technology background"
          layout="fill"
        />
      </div>
      <div className="absolute flex w-[18.75rem] h-[16.87rem] top-[30rem] md:w-[40rem] md:h-[36rem] md:top-[25rem] lg:w-[48.75rem] lg:h-[43.75rem] lg:top-[28rem] xl:w-[65.75rem] xl:h-[59rem] xl:top-[29rem] mx-auto right-0 left-0 duration-500">
        <Image src="/assets/home/diagram.svg" alt="technology background" layout="fill" priority />
      </div>
    </div>
  );
};

export default TechnologySection;
