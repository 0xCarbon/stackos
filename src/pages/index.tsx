import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '@/components';
import SectionDevelopers from '@/components/home/section-developers';
import SectionGovernance from '@/components/home/section-governance';
import SectionTechnology from '@/components/home/section-technology';
import SectionHero from '@/components/home/section-hero';
import SectionToken from '@/components/home/section-token';
import SectionPartnerships from '@/components/home/section-partnerships';

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
      <SectionHero />
      <SectionTechnology />
      <SectionDevelopers />
      <SectionGovernance />
      <SectionPartnerships />
      <SectionToken />
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
