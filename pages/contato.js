import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderMobile from '../components/HeaderMobile';

function Contato() {
  return (
    <div id='contact__page'>
        <Head>
            <title>Contato | Hevelen Jeronymo</title>
            <meta name="title" content="Contato | Hevelen Jeronymo" />
            <meta property="og:title" content="Contato | Hevelen Jeronymo" />
            <meta property="twitter:title" content="Contato | Hevelen Jeronymo" />
        </Head>
        <Header />
        <HeaderMobile />
        <Footer />
        <main>
          <h1>CONTATO</h1>
        </main>
    </div>
  )
}

export default Contato