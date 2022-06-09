import { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '@/components';
import HeroSection from '@/components/partners/HeroSection';
import BenefitsSection from '@/components/partners/BenefitsSection';

const Partners: NextPage = () => {
  const [offsetY, setOffsetY] = useState(0);

  function handleChangeOffset() {
    setOffsetY(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleChangeOffset);

    return () => {
      window.removeEventListener('scroll', handleChangeOffset);
    };
  }, []);

  return (
    <>
      <Head>
        <title>StackOS</title>
        <meta name="description" content="StackOS partners page" />
        <meta name="theme-color" content="#111827" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/stackos-logo.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroSection offsetY={offsetY} />
        <BenefitsSection offsetY={offsetY} />
      </Layout>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Partners;
