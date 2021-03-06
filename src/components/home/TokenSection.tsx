import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@radix-ui/react-separator';
import { useTranslation } from 'react-i18next';
import { LearnMore } from '@/components';
import ExplainCard from '../ExplainCard';

const TokenSection = ({ offsetY }: { offsetY: number }) => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col justify-start sm:pt-5">
      <div className="flex flex-row justify-start items-center mb-9 child:duration-500">
        <Separator className="h-10 lg:h-14 w-[0.4rem] lg:w-2 xl:w-2 2xl:w-[0.45rem] bg-main-green" />
        <h2 className="text-[#FFFFFF] font-extrabold text-4xl lg:text-5xl mx-5">
          {t('HOME_TOKEN_TITLE')}
        </h2>
      </div>
      <p className="text-white font-normal text-base lg:text-xl xl:text-xl 2xl:text-xl max-w-xl lg:max-w-2xl xl:max-w-2xl 2xl:max-w-3xl mb-3 lg:mb-6 2xl:mb-10 duration-500">
        {t('HOME_TOKEN_DESCRIPTION')}
      </p>
      <Link className="z-10" href="/token" aria-label="redirect to token page">
        <a className="z-10">
          <LearnMore />
        </a>
      </Link>

      <div className="flex flex-col justify-around h-full md:h-[20rem] lg:h-[27rem]">
        <div className="flex flex-row mt-20 2xl:mt-16 flex-wrap md:h-30 lg:h-44 md:space-x-16 2xl:space-x-32">
          <div className="w-[16rem] lg:w-[18.8rem] xl:w-[21.8rem] mb-10">
            <ExplainCard iconName="globe" description={t('HOME_TOKEN_NOTE_1')} />
          </div>
          <div className="w-[16rem] lg:w-[18.8rem] xl:w-[21.8rem] mb-10">
            <ExplainCard iconName="annotation" description={t('HOME_TOKEN_NOTE_2')} />
          </div>
        </div>

        <div className="flex flex-row flex-wrap md:h-30 lg:h-44 md:space-x-16 2xl:space-x-32">
          <div className="w-[16rem] lg:w-[18.8rem] xl:w-[21.8rem] mb-10">
            <ExplainCard iconName="bolt" description={t('HOME_TOKEN_NOTE_3')} />
          </div>
          <div className="w-[16rem] lg:w-[18.8rem] xl:w-[21.8rem] mb-10">
            <ExplainCard iconName="bolt" description={t('HOME_TOKEN_NOTE_4')} />
          </div>
        </div>
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.01}px, ${offsetY * 0.01}px)` }}
        className="selectDisable hidden md:flex lg:hidden absolute w-[18rem] h-[14rem] top-[-5rem] right-[-5rem] duration-200"
      >
        <Image
          src="/assets/home/token-background-scribbles-md.svg"
          alt="token-background-scribbles-md"
          layout="fill"
          priority
        />
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.035}px, ${offsetY * 0.035}px)` }}
        className="selectDisable hidden md:flex lg:hidden absolute w-[9.43rem] h-[6.875rem] top-[-6rem] right-[5.6rem] duration-200"
      >
        <Image
          src="/assets/home/token-background-circles-md.svg"
          alt="token-background-circles-md"
          layout="fill"
          priority
        />
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.01}px, ${offsetY * 0.01}px)` }}
        className="selectDisable hidden lg:flex absolute w-[69.25rem] h-[60rem] top-[-30rem] right-[-60rem] xl:top-[-28rem] xl:right-[-50rem] 2xl:right-[-48rem] duration-200"
      >
        <Image
          src="/assets/home/token-background-scribbles-lg.svg"
          alt="token-background-scribbles-lg"
          layout="fill"
          priority
        />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.035}px, ${offsetY * 0.035}px)` }}
        className="selectDisable hidden lg:flex absolute w-[34.5rem] h-[30rem] top-[-18rem] right-[-32rem] 2xl:top-[-13rem] 2xl:right-[-25rem] duration-200"
      >
        <Image
          src="/assets/home/token-background-circles-lg.svg"
          alt="token-background-circles-lg"
          layout="fill"
          priority
        />
      </div>
    </div>
  );
};

export default TokenSection;
