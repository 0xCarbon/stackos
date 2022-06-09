import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Card, LearnMore } from '@/components';

const DevelopersSection = ({ offsetY }: { offsetY: number }) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full flex flex-col justify-center items-center text-center py-20 md:py-0 mt-[13rem] sm:mt-[16rem] md:mt-[3rem] xl:mt-[10rem]">
      <div className="z-10 flex flex-col justify-center items-center">
        <h2 className="text-[#F4F4F4] font-extrabold text-4xl lg:text-5xl mb-9">
          {t('HOME_DEVELOPERS_TITLE')}
        </h2>
        <span className="text-white font-normal text-base max-w-md lg:max-w-lg 2xl:max-w-xl mb-3">
          {t('HOME_DEVELOPERS_DESCRIPTION')}
        </span>
        <Link className="z-10" href="/developers" passHref>
          <a className="z-10">
            <LearnMore />
          </a>
        </Link>
        <div className="mt-16 flex flex-col justify-center items-center md:flex-row child:mb-10 child:md:mx-4 child:lg:mx-16 child:xl:mx-28 child:2xl:mx-28">
          <a href="https://docs.stackos.io/stackos-docs/" target="blank">
            <Card
              src="/assets/home/arte-support.svg"
              title={t('HOME_DEVELOPERS_CARD_TITLE')}
              subtitle={t('HOME_DEVELOPERS_CARD_SUBTITLE1')}
            />
          </a>
          <a href="https://discord.gg/yRk7CdjG" target="blank">
            <Card
              src="/assets/home/arte-documentation.svg"
              title={t('HOME_DEVELOPERS_CARD_TITLE2')}
              subtitle={t('HOME_DEVELOPERS_CARD_SUBTITLE2')}
            />
          </a>
        </div>
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.006}px, -${offsetY * 0.006}px)` }}
        className="selectDisable lg:hidden absolute w-[22.75rem] h-[24.75rem] left-[-17rem] top-[3rem] md:left-[-17rem] md:top-[-2rem] duration-200"
      >
        <Image
          src="/assets/home/developers-background-scribbles-sm.svg"
          alt="developers-background-scribbles-sm"
          layout="fill"
        />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.025}px, -${offsetY * 0.025}px)` }}
        className="selectDisable lg:hidden absolute w-[9.375rem] h-[9.813rem] left-[1rem] top-[18rem] sm:left-[-3rem] md:left-[2rem] md:top-[13rem] duration-200"
      >
        <Image
          src="/assets/home/developers-background-circles-sm.svg"
          alt="developers-background-circles-sm"
          layout="fill"
        />
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.006}px, -${offsetY * 0.006}px)` }}
        className="selectDisable lg:hidden absolute w-[17.5rem] h-[18.25rem] right-[-8rem] top-[50rem] sm:right-[-12rem] md:right-[-2.8rem] md:top-[42rem] duration-200"
      >
        <Image
          src="/assets/home/developers-background-dribbles2-sm.svg"
          alt="developers-background-dribbles2-sm"
          layout="fill"
        />
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.025}px, -${offsetY * 0.025}px)` }}
        className="selectDisable lg:hidden absolute w-[3.25rem] h-[3.25rem] right-[6.5rem] sm:right-[1.5rem] top-[56rem] md:right-[7rem] md:top-[45.5rem] duration-200"
      >
        <Image
          src="/assets/home/developers-background-circles2-sm.svg"
          alt="developers-background-circles2"
          layout="fill"
        />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.006}px, -${offsetY * 0.006}px)` }}
        className="selectDisable md:hidden absolute w-[18.62rem] h-[19rem] right-[-4.8rem] top-[77rem] sm:right-[-8rem] md:top-[46.5rem] duration-200"
      >
        <Image
          src="/assets/home/developers-background-dribbles3-sm.svg"
          alt="developers-background-circles2"
          layout="fill"
        />
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.025}px, ${offsetY * 0.025}px)` }}
        className="selectDisable md:hidden absolute w-[4.688rem] h-[5.93rem] right-[2rem] top-[78.5rem] sm:right-[1rem] md:top-[46.5rem] duration-200"
      >
        <Image
          src="/assets/home/developers-background-circles3-sm.svg"
          alt="developers-background-circles3-sm"
          layout="fill"
        />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.013}px, ${offsetY * 0.013}px)` }}
        className="selectDisable md:hidden absolute w-[2.75rem] h-[2.75rem] right-[2rem] top-[83rem] sm:right-[-2rem] sm:top-[83rem] md:top-[46.5rem] duration-200"
      >
        <Image
          src="/assets/home/developers-background-circle3-sm.svg"
          alt="developers-background-circle3-sm"
          layout="fill"
        />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.006}px, -${offsetY * 0.006}px)` }}
        className="selectDisable hidden lg:inline absolute w-[43.75rem] h-[39.37rem] left-[-32rem] xl:left-[-28rem] 2xl:left-[-28rem] top-[-17rem] 2xl:top-[-12rem] duration-200"
      >
        <Image
          src="/assets/home/developers-background-scribbles-lg.svg"
          alt="developers-background-scribbles-lg"
          layout="fill"
        />
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.025}px, ${offsetY * 0.025}px)` }}
        className="selectDisable hidden lg:inline absolute w-[19.12rem] h-[16.43rem] left-[-19rem] xl:left-[-15rem] 2xl:left-[-13rem] top-[-6rem] 2xl:top-[-0.5rem] duration-200"
      >
        <Image
          src="/assets/home/developers-background-circles-lg.svg"
          alt="developers-background-circles-lg"
          layout="fill"
        />
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.006}px, -${offsetY * 0.006}px)` }}
        className="selectDisable hidden lg:inline absolute w-[27.813rem] h-[31.87rem] xl:w-[46.43rem] xl:h-[53.12rem] right-[-18rem] top-[-10rem] xl:right-[-32rem] xl:top-[-18rem] 2xl:right-[-38rem] 2xl:top-[-12rem] duration-200"
      >
        <Image
          src="/assets/home/developers-background-scribbles2-lg.svg"
          alt="developers-background-scribbles2-lg"
          layout="fill"
        />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.025}px, ${offsetY * 0.025}px)` }}
        className="selectDisable hidden xl:inline absolute w-[8.93rem] h-[8.93rem] right-[-1.4rem] top-[-15rem] xl:right-[-2rem] xl:top-[-12rem] 2xl:right-[-5rem] 2xl:top-[-7rem] duration-200"
      >
        <Image
          src="/assets/home/developers-background-circle2-lg.svg"
          alt="developers-background-circle2-lg"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default DevelopersSection;
