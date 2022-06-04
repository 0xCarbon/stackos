import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Layout } from '@/components';
import HeroSection from '@/components/developers/HeroSection';
import DeployOptionsSection from '@/components/developers/DeployOptionsSection';
import WhyStackOSSection from '@/components/developers/WhyStackOSSection';

const Developers: NextPage = () => {
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
        <meta name="description" content="StackOS developers page" />
        <meta name="theme-color" content="#111827" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/stackos-logo.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroSection />
        <DeployOptionsSection offsetY={offsetY} />
        <WhyStackOSSection offsetY={offsetY} />
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

export default Developers;
