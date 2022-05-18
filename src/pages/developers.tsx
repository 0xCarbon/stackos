import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '@/components';
import HeroSection from '@/components/developers/HeroSection';
import DeployOptionsSection from '@/components/developers/DeployOptionsSection';

const Developers: NextPage = () => (
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
      <DeployOptionsSection />
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

export default Developers;
