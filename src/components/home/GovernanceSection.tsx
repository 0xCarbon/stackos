import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Separator } from '@radix-ui/react-separator';
import { LearnMore } from '@/components';

const GovernanceSection = ({ offsetY }: { offsetY: number }) => {
  const { t } = useTranslation();

  return (
    <div className="relative md:mt-12 flex flex-col justify-start py-16">
      <div className="z-10">
        <div className="flex flex-row justify-start items-center mb-9">
          <Separator className="h-9 w-[5px] lg:w-2 lg:h-14 2xl:w-[10px] 2xl:h-16 bg-main-green" />
          <h2 className="text-[#FFFFFF] font-extrabold text-4xl lg:text-5xl mx-5">
            {t('HOME_GOVERNANCE_TITLE')}
          </h2>
        </div>
        <span className="flex text-white font-normal text-base lg:text-xl max-w-lg lg:max-w-xl mb-3 lg:mb-6 2xl:mb-10">
          {t('HOME_GOVERNANCE_DESCRIPTION')}
        </span>
        <Link className="z-10" href="/governance" aria-label="redirect to governance page">
          <a className="z-10">
            <LearnMore />
          </a>
        </Link>
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.006}px, -${offsetY * 0.006}px)` }}
        className="selectDisable md:hidden absolute w-[22.75rem] h-[24.75rem] right-[-19rem] top-[7rem] sm:right-[-19rem] sm:top-[4rem] duration-200"
      >
        <Image
          src="/assets/home/governance-background-dribbles-sm.svg"
          alt="governance-background-dribbles-sm"
          layout="fill"
        />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.035}px, -${offsetY * 0.035}px)` }}
        className="selectDisable md:hidden absolute w-[10.87rem] h-[8.75rem] right-[-12.5rem] top-[22rem] sm:right-[-14rem] sm:top-[17rem] duration-200"
      >
        <Image
          src="/assets/home/governance-background-circles-sm.svg"
          alt="governance-background-circles-sm"
          layout="fill"
        />
      </div>
      <div
        style={{ transform: `translateX(-${offsetY * 0.01}px)` }}
        className="selectDisable hidden md:inline absolute w-[65rem] lg:w-[120rem] h-[28rem] lg:h-[52rem] right-[-10rem] top-[5rem] lg:right-[-15rem] xl:right-[-28rem] lg:top-[1rem] xl:top-[2.4rem] duration-200"
      >
        <Image
          src="/assets/home/governance-background-scribbles-md.svg"
          alt="governance-background-scribbles-md"
          layout="fill"
        />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.035}px, -${offsetY * 0.035}px)` }}
        className="selectDisable hidden md:inline lg:hidden absolute w-[8rem] lg:w-[120rem] h-[4rem] lg:h-[52rem] right-[4rem] top-[26rem] duration-200"
      >
        <Image
          src="/assets/home/governance-background-circles-md.svg"
          alt="governance-background-circles-md"
          layout="fill"
        />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.02}px, -${offsetY * 0.02}px)` }}
        className="selectDisable hidden md:inline lg:hidden absolute w-[19.5rem] lg:w-[120rem] h-[7.063rem] lg:h-[52rem] right-[1rem] top-[24rem] duration-200"
      >
        <Image
          src="/assets/home/governance-background-circle-md.svg"
          alt="governance-background-circle-md"
          layout="fill"
        />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.035}px, -${offsetY * 0.035}px)` }}
        className="selectDisable hidden lg:inline absolute w-[25.37rem] h-[16rem] right-[-7rem] top-[25rem] xl:right-[-3rem] xl:top-[23rem] duration-200"
      >
        <Image
          src="/assets/home/governance-background-circles-lg.svg"
          alt="governance-background-circles-lg"
          layout="fill"
        />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.02}px, -${offsetY * 0.02}px)` }}
        className="selectDisable hidden lg:inline absolute w-[24.25rem] h-[10.87rem] right-[16rem] top-[27rem] xl:right-[20rem] xl:top-[24rem] duration-200"
      >
        <Image
          src="/assets/home/governance-background-circle-lg.svg"
          alt="governance-background-circle-lg"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default GovernanceSection;
