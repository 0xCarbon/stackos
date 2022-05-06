import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { MdMenu } from 'react-icons/md';

const Header = () => {
  const { t } = useTranslation();

  const [isMediumScreen, setIsMediumScreen] = useState<boolean>();

  const updateMedia = () => {
    setIsMediumScreen(window.innerWidth < 1024);
  };

  useEffect(() => {
    setIsMediumScreen(window.innerWidth < 770);
    window.addEventListener('resize', updateMedia, { passive: true });
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <header>
      <div className="flex flex-row bg-[#1F2937] lg:bg-transparent justify-between items-center px-4 py-4 lg:px-10 lg:py-16 2xl:justify-center text-white font-medium text-xl duration-500">
        <div className="relative w-36 h-8 lg:w-36 lg:h-8 xl:w-40 xl:h-10 2xl:w-48 2xl:h-12 xl:mr-2 2xl:mr-16 duration-500">
          <Image width={152} height={32} layout="responsive" src="/stackos-logo.svg" />
        </div>
        {isMediumScreen ? (
          <MdMenu size={24} color="#D1D5DB" />
        ) : (
          <>
            <Link href="/technology">
              <a className="2xl:mr-14">{t('HEADER_TECHNOLOGY')}</a>
            </Link>
            <Link href="/developers">
              <a className="2xl:mr-14">{t('HEADER_DEVELOPERS')}</a>
            </Link>
            <Link href="/governance">
              <a className="2xl:mr-14">{t('HEADER_GOVERNANCE')}</a>
            </Link>
            <Link href="/partners">
              <a className="2xl:mr-14">{t('HEADER_PARTNERS')}</a>
            </Link>
            <Link href="/token">
              <a>{t('HEADER_TOKEN')}</a>
            </Link>

            <div className="flex font-Inter items-center xl:ml-56 2xl:ml-[24rem] justify-center px-4 2xl:px-6 py-2 border border-main-green rounded-md text-main-green text-sm">
              <a target="_blank" href="https://app.stackos.io/" rel="noreferrer">
                {t('HEADER_DEPLOY_BUTTON')}
              </a>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
