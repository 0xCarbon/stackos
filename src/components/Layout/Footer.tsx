import { BsTwitter, BsTelegram } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between lg:mt-56 px-5 md:px-0 max-w-[23rem] sm:max-w-[33.75rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[71.25rem] mx-auto">
        <div>
          <h1 className="text-[1.9rem] font-semibold text-main-green">{t('FOOTER_TITLE')}</h1>
          <div className="flex text-sm font-extralight text-main-grey">
            <div className="flex mr-4">
              <Image src="/assets/layout/paper.svg" width={9} height={12} />
              <p className="ml-[0.44rem]">{t('FOOTER_WHITEPAPER')}</p>
            </div>
            <div className="flex">
              <Image src="/assets/layout/ambassador.svg" width={10} height={12} />
              <p className="ml-[0.44rem]">{t('FOOTER_AMBASSADOR')}</p>
            </div>
          </div>
        </div>
        <div className="flex text-main-green text-2xl space-x-5 mt-7 child:p-3 child:rounded-full child:border child:border-main-green">
          <div>
            <BsTwitter />
          </div>
          <div>
            <BsTelegram />
          </div>
          <div>
            <FaDiscord />
          </div>
        </div>
      </div>
      <div className="py-6 border-t border-main-green text-center">
        <p className="text-white text-sm font-normal">{t('FOOTER_COPYRIGHT')}</p>
      </div>
    </div>
  );
};

export default Footer;
