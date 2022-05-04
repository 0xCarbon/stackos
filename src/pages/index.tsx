import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '@/components';

const Home: NextPage = () => (
  <>
    <Head>
      <title>StackOS</title>
      <meta name="description" content="StackOS landing page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      {/* HERO SECTION - JUST DEPLOY */}
      {/* TECHONOLOGY */}
      {/* DEVELOPERS */}
      {/* GOVERNANCE */}
      {/* PARTNERSHIPS */}
      {/* TOKEN */}
    </Layout>
  </>
);

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header'])),
    },
  };
}

export default Home;
