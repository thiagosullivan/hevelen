import Head from 'next/head';
import AboutHome from '../components/AboutHome';
import BannerHero from '../components/BannerHero';
import BlogHome from '../components/BlogHome';
import Footer from '../components/Footer';
import GalleryHome from '../components/GalleryHome';
import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import NewsletterHome from '../components/NewsletterHome';
import SectionTwo from '../components/SectionTwo';
import Services from '../components/Services';
import { getAllPosts } from '../lib/dato-cms';

export default function Home({posts}) {

  console.log(posts, "POSTAGENS")
  return (
    <div id="home">
      <Head>
        <title>Hevelen Jeronymo - Profissional de Educação Física</title>
        <meta name="title" content="Hevelen Jeronymo - Profissional de Educação Física" />
        <meta property="og:title" content="Hevelen Jeronymo - Profissional de Educação Física" />
        <meta property="twitter:title" content="Hevelen Jeronymo - Profissional de Educação Física" />
      </Head>
      
      <Header />
      <HeaderMobile />
      <main>
        <BannerHero />
        <SectionTwo />
        <Services />
        <AboutHome />
        <GalleryHome />
        <BlogHome posts={posts} />
        {/* <NewsletterHome /> */}
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts: posts || []
    },
    revalidate: 5,
  }
}