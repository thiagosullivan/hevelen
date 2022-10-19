import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Blog() {
  return (
    <div id='blog__page'>
        <Head>
            <title>Blog | Hevelen Jeronymo</title>
            <meta name="title" content="Blog | Hevelen Jeronymo" />
            <meta property="og:title" content="Blog | Hevelen Jeronymo" />
            <meta property="twitter:title" content="Blog | Hevelen Jeronymo" />
        </Head>
        <Header />
        <Footer />
        <main>
          <h1>BLOG</h1>
        </main>
    </div>
  )
}

export default Blog