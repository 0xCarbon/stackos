import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '@/components';
import SectionTechnology from '@/components/home/section-technology';
import SectionGovernance from '@/components/home/section-governance';
// import { useAccount } from 'wagmi';

const Home: NextPage = () => (
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
      {/* HERO SECTION - JUST DEPLOY */}
      <SectionTechnology />
      {/* DEVELOPERS */}
      <SectionGovernance />
      {/* PARTNERSHIPS */}
      {/* TOKEN */}
    </Layout>
  </>
);

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
    },
  };
}

export default Home;
