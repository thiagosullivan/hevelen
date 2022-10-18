import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllPosts, getAllCategories } from '../lib/dato-cms';
import { ResultContainerPage } from '../styles/resultPage';
import Link from 'next/link';
import PostCardResults from '../components/PostCardsResults';

export async function getStaticProps() {
  const posts = (await getAllPosts()) || [];
  const categories = (await getAllCategories() || []);

  return {
    props: { posts, categories }
  }
}

function ResultsPage({posts, categories}) {

  const router = useRouter()
  const searchQuery = router.query.s
  let filteredPosts = posts

  if (searchQuery) {
    const searchTerms = String(searchQuery).toLowerCase().trim()
    const searchTermsArray = searchTerms
      .split(' ')
      .filter(term => term.length > 2)

    filteredPosts = posts.filter(post => {
      const title = post.title.toLowerCase()
      const description = post.resume.toLowerCase()

      let includesInTitle
      let includesInDescription

      searchTermsArray.forEach(searchTerm => {
        includesInTitle = title.includes(searchTerm)
        includesInDescription = description.includes(searchTerm)

        return includesInTitle || includesInDescription
      })

      if (includesInTitle || includesInDescription) return true
    })
  }

  return (
    <div id="result__page">
        <Head>
            <title> Resultados | Hevelen Jeronymo </title>
            <meta name="title" content="Resultados | Hevelen Jeronymo" />
            <meta property="og:title" content="Resultados | Hevelen Jeronymo" />
            <meta property="twitter:title" content="Resultados | Hevelen Jeronymo" />
        </Head>
        <Header />
        <main>
          <ResultContainerPage>
            {filteredPosts.length === 0 && (
              <div className='Search__error'>
                <p>Desculpe, mas nenhuma publicação foi encontrada nessa busca.</p>
                <Link href="/">Voltar para a Home</Link>
              </div>
            )}
            <PostCardResults postagens={filteredPosts} />
          </ResultContainerPage>
        </main>
        <Footer />
    </div>
  )
}

export default ResultsPage