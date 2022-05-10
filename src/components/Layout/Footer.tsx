import { ImFacebook2 } from 'react-icons/im';
import { BsGithub, BsTwitter, BsDribbble } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-auto">
      <div className="flex justify-between px-5 md:px-7 lg:px-10 2xl:px-20">
        <div className="flex flex-col text-white">
          <span className="text-3xl">{t('FOOTER_TITLE')}</span>
          <span className="text-base md:text-lg max-w-xs md:max-w-md lg:max-w-xl pt-3 pb-5  lg:pt-2 lg:pb-7">
            {t('FOOTER_SUBTITLE')}
          </span>
          <div className="flex space-x-2">
            <div className="bg-white rounded-full p-3">
              <BsTwitter color="#3182CE" />
            </div>
            <div className="bg-white rounded-full p-3">
              <ImFacebook2 color="#63B3ED" />
            </div>
            <div className="bg-white rounded-full p-3">
              <BsDribbble color="#F687B3" />
            </div>
            <div className="bg-white rounded-full p-3">
              <BsGithub color="#3A71DF" />
            </div>
          </div>
        </div>
        <div className="flex text-white text-xs md:text-sm space-x-10 lg:space-x-12 xl:space-x-32 2xl:space-x-56">
          <div className="flex flex-col space-y-1 md:space-y-3 lg:space-y-2 2xl:space-y-4">
            <span>{t('FOOTER_LINKS')}</span>
            <span>{t('FOOTER_LINK1')}</span>
            <span>{t('FOOTER_LINK2')}</span>
            <span>{t('FOOTER_LINK3')}</span>
            <span>{t('FOOTER_LINK4')}</span>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-3 lg:space-y-2 2xl:space-y-4">
            <span>{t('FOOTER_RESOURCES')}</span>
            <span>{t('FOOTER_RESOURCE1')}</span>
            <span>{t('FOOTER_RESOURCE2')}</span>
            <span>{t('FOOTER_RESOURCE3')}</span>
            <span>{t('FOOTER_RESOURCE4')}</span>
          </div>
        </div>
      </div>

      <div className="border-t-[1px] text-white text-xs md:text-sm pb-28 lg:pb-52 mt-4 pt-4 md:pt-8 md:mt-8 lg:mt-14 2xl:mt-10 text-center">
        <span>{t('FOOTER_COPYRIGHT')}</span>
      </div>
    </div>
  );
};

export default Footer;
