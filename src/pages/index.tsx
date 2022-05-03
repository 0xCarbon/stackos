import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '@/components';
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
      asdasdasd
      {/* HERO SECTION - JUST DEPLOY */}
      <SectionTechnology />
      {/* DEVELOPERS */}
      {/* GOVERNANCE */}
      {/* PARTNERSHIPS */}
      {/* TOKEN */}
    </Layout>
  </>
);

export default Home;
