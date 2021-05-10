import { AppProps } from 'next/app';
import Head from 'next/head';
import LanguageProvider from '../context/LanguageProvider';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Miłosz Piskadło - Frotend Developer - Right place if you are looking for Website / Web-application"
        />
        <meta name="robots" content="index, follow" />
        <title>Miłosz Piskadło</title>
      </Head>
      <LanguageProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </>
  );
}

export default MyApp;
