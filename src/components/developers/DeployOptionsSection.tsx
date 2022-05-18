import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const DeployOptionsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row text-white text-center items-center justify-center">
        <div className="max-w-[33rem] lg:max-w-[23rem]">
          <h2 className="text-[2.75rem] xl:text-[2.625rem] font-extrabold mb-11 lg:mb-9">
            {t('DEVELOPERS_DEPLOY1')}
            <span className="text-main-green">{t('DEVELOPERS_DEPLOY1_SPAN')}</span>
          </h2>
          <p className="text-xl font-normal">{t('DEVELOPERS_DEPLOY_DESCRIPTION1')}</p>
        </div>
        <p className="text-6xl font-light mt-14 mb-16 lg:mx-24 xl:mx-36 2xl:mx-56">
          {t('DEVELOPERS_DEPLOY_OR')}
        </p>
        <div className="max-w-[33rem] lg:max-w-[23rem]">
          <h2 className="text-[2.75rem] xl:text-[2.625rem] font-extrabold mb-11 lg:mb-9">
            {t('DEVELOPERS_DEPLOY1')}
            <span className="text-main-green">{t('DEVELOPERS_DEPLOY2_SPAN')}</span>
          </h2>
          <p className="text-xl font-normal">{t('DEVELOPERS_DEPLOY_DESCRIPTION2')}</p>
        </div>
      </div>
      <div className="absolute flex w-[35rem] h-[15rem] top-[13.5rem] md:left-14 lg:top-16 lg:left-48 xl:top-5 xl:left-80 2xl:left-[26rem]">
        <Image src="/assets/developers/deploys-bg-developers.svg" layout="fill" />
      </div>
    </div>
  );
};

export default DeployOptionsSection;
