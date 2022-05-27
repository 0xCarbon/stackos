import Image from 'next/image';
import { Separator } from '@radix-ui/react-separator';
import { useTranslation } from 'react-i18next';
import { LearnMore } from '@/components';
import StackOSCarousel from '../StackOSCarousel';

const PartnershipsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative mt-0 md:mt-32 lg:mt-[19rem] flex flex-col justify-end items-end py-20">
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

      <div className="mt-16 flex flex-col sm:flex-row w-full items-end sm:items-center justify-center sm:justify-end child:duration-500">
        <StackOSCarousel />
        <div className="hidden sm:flex flex-col text-white">
          <p className="whitespace-nowrap font-semibold text-3xl line leading-7 select-none">
            30 +
          </p>
          <p className="font-light select-none">partners</p>
        </div>
      </div>
      <div className="absolute flex sm:hidden w-[40rem] h-[16.87rem] top-[-1rem] right-[-19rem] duration-500">
        <Image
          src="/assets/home/governance-background1-md.svg"
          alt="technology background"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default PartnershipsSection;
