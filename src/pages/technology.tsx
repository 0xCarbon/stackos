import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { Layout } from '@/components';
import AgilitySection from '@/components/technology/AgilitySection';
import DecentralizedSection from '@/components/technology/DecentralizedSection';
import HeroSection from '@/components/technology/HeroSection';

const Technology: NextPage = () => {
  const [offsetY, setOffsetY] = useState(0);

  function handleChangeOffset() {
    setOffsetY(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleChangeOffset);
  }, []);

  return (
    <>
      <Head>
        <title>StackOS</title>
        <meta name="description" content="StackOS landing page" />
        <meta name="theme-color" content="#111827" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/stackos-logo.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroSection offsetY={offsetY} />
        <AgilitySection />
        <DecentralizedSection offsetY={offsetY} />
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

export default Technology;
