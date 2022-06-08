import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { Layout } from '@/components';
import HeroSection from '@/components/governance/HeroSection';
import ExplainSection from '@/components/governance/ExplainSection';
import PartnersSection from '@/components/governance/PartnersSection';

const Governance: NextPage = () => {
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
        <title>StackOS - Governance</title>
        <meta name="description" content="StackOS governance" />
        <meta name="theme-color" content="#111827" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/stackos-logo.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroSection offsetY={offsetY} />
        <ExplainSection offsetY={offsetY} />
        <PartnersSection />
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

export default Governance;
