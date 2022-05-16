import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '@/components';
import HeroSection from '@/components/governance/HeroSection';
import ExplainSection from '@/components/governance/ExplainSection';

const Governance: NextPage = () => (
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
      <HeroSection />
      <ExplainSection />
    </Layout>
  </>
);

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Governance;
