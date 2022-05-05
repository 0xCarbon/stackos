import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '@/components';
import SectionTechnology from '@/components/home/section-technology';
import SectionGovernance from '@/components/home/section-governance';
import SectionHero from '@/components/home/section-hero';
// import { useAccount } from 'wagmi';

const Home: NextPage = () => (
  <>
    <Head>
      <title>StackOS</title>
      <meta name="description" content="StackOS landing page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <SectionHero />
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
