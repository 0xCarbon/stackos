import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '@/components';
import SectionDevelopers from '@/components/home/section-developers';
import SectionGovernance from '@/components/home/section-governance';
import SectionTechnology from '@/components/home/section-technology';
// import { useAccount } from 'wagmi';

const Home: NextPage = () => (
  <>
    <Head>
      <title>StackOS</title>
      <meta name="description" content="StackOS landing page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      {/* HERO SECTION - JUST DEPLOY */}
      <SectionTechnology />
      <SectionDevelopers />
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
