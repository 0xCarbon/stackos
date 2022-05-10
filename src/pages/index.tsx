import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '@/components';
import DevelopersSection from '@/components/home/DevelopersSection';
import GovernanceSection from '@/components/home/GovernanceSection';
import TechnologySection from '@/components/home/TechnologySection';
import HeroSection from '@/components/home/HeroSection';
import TokenSection from '@/components/home/TokenSection';
import PartnershipsSection from '@/components/home/PartnershipsSection';

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
      <HeroSection />
      <TechnologySection />
      <DevelopersSection />
      <GovernanceSection />
      <PartnershipsSection />
      <TokenSection />
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

export default Home;
