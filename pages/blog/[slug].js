import Head from 'next/head';
import React from 'react';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeaderMobile from '../../components/HeaderMobile';
import PostPage from '../../components/PostPage';
import PostTitle from '../../components/PostPage/postTitle';
import { getAllPosts, getAllCategories } from '../../lib/dato-cms';
import { PostContainer } from '../../styles/postPage';

function PostsPage({ post, categories}) {

    console.log(post, 'POST')
    console.log(categories, 'CATEGORY')

  return (
    <div id='post__page'>
        <Head>
            <title>{post.title} | Hevelen Jeronymo</title>
            <meta name="title" content={`${post.title} | Hevelen Jeronymo`}/>
            <meta property="og:title" content={`${post.title} | Hevelen Jeronymo`} />
            <meta property="twitter:title" content={`${post.title} | Hevelen Jeronymo`} />
        </Head>
        <Header />
        <HeaderMobile />
            <PostContainer>
                <PostTitle post={post} />
                <div className='post__content'>
                  <PostPage post={post} />
                  <Aside categories={categories} />
                </div>
            </PostContainer>
        <Footer />
    </div>
  )
};

export const getStaticProps = async ({ params }) => {
    const slug = params?.slug;
    const posts = await getAllPosts();
    const post = posts.find((s) => s.slug === slug) || null;
    const categories = (await getAllCategories() || []);
  
    if(!post) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: {
        categories,
        post,
        allPosts: posts,
      },
      revalidate: 60,
    };
  };

export const getStaticPaths = async () => {
    const posts = await getAllPosts();
    const slugs = posts.map((s) => ({ params: { slug: s.slug }}));
  
    return {
      paths: slugs,
      fallback: false,
    }
  }

export default PostsPage