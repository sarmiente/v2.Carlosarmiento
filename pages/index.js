import Head from 'next/head';
import Hero from '../components/Hero';

import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </div>
  );
}
