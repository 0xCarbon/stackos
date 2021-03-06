import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const DeployOptionsSection = ({ offsetY }: { offsetY: number }) => {
  const { t } = useTranslation();

  return (
    <div className="relative mt-32">
      <div className="flex flex-col lg:flex-row text-white text-center items-center justify-center">
        <div className="z-10 max-w-[33rem] lg:max-w-[23rem]">
          <h2 className="text-[2.75rem] xl:text-[2.625rem] font-extrabold mb-11 lg:mb-9">
            {t('DEVELOPERS_DEPLOY1')}
            <span className="text-main-green">{t('DEVELOPERS_DEPLOY1_SPAN')}</span>
          </h2>
          <p className="text-xl font-normal">{t('DEVELOPERS_DEPLOY_DESCRIPTION1')}</p>
        </div>
        <p className="z-10 text-6xl font-light mt-14 mb-16 lg:mx-24 xl:mx-36 2xl:mx-56">
          {t('DEVELOPERS_DEPLOY_OR')}
        </p>
        <div className="z-10 max-w-[33rem] lg:max-w-[23rem]">
          <h2 className="text-[2.75rem] xl:text-[2.625rem] font-extrabold mb-11 lg:mb-9">
            {t('DEVELOPERS_DEPLOY1')}
            <span className="text-main-green">{t('DEVELOPERS_DEPLOY2_SPAN')}</span>
          </h2>
          <p className="text-xl font-normal">{t('DEVELOPERS_DEPLOY_DESCRIPTION2')}</p>
        </div>
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.01}px, ${offsetY * 0.01}px)` }}
        className="selectDisable absolute flex w-[35rem] h-[15rem] top-[21rem] left-[-8rem] sm:top-[13.5rem] lg:top-16 xl:top-5 sm:right-0 sm:left-0 sm:mx-auto duration-300"
      >
        <Image
          alt="deploys-bg-developers"
          src="/assets/developers/deploys-bg-developers.svg"
          layout="fill"
        />
      </div>
      <div
        style={{ transform: `translate(-${offsetY * 0.05}px, -${offsetY * 0.05}px)` }}
        className="selectDisable absolute flex w-[25rem] h-[5rem] top-[24rem] left-[-2rem] sm:top-[16rem] sm:left-[2rem] lg:top-[7rem] xl:top-[4rem] 2xl:top-[7rem] sm:right-0 sm:mx-auto duration-300"
      >
        <Image alt="deploys-layer2" src="/assets/developers/deploys-layer2.svg" layout="fill" />
      </div>
      <div
        style={{ transform: `translate(${offsetY * 0.03}px, ${offsetY * 0.03}px)` }}
        className="selectDisable absolute flex w-[25rem] h-[5rem] top-[25rem] left-[-4rem] sm:top-[18rem] sm:left-[-2rem] lg:top-[8rem] xl:top-[6rem] 2xl:top-[8rem] sm:right-0 sm:mx-auto duration-300"
      >
        <Image alt="deploys-layer3" src="/assets/developers/deploys-layer3.svg" layout="fill" />
      </div>
    </div>
  );
};

export default DeployOptionsSection;
