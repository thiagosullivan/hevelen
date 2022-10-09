import Image from 'next/image';
import React from 'react';
import ButtonJoin from '../ButtonJoin';
import { BlogCard, BlogHomeContainer } from './style';

function BlogHome({posts}) {
    console.log(posts, 'POST COMPONENT')
  return (
    <BlogHomeContainer>
        <div className='bloghome__content'>
            <h2>Publicações Recentes</h2>
            <p className='bloghome__subtitle'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>
            <div className='blog__content'>
                {posts.slice( 0, 3 ).map((post, index) => {
                    return (
                        <BlogCard key={index}>
                            <div className='blog__home__img'>
                                <div className='blog__home__date'>
                                    <span>{new Date(post.createdAt).toLocaleDateString("pt-BR", {day: "2-digit"})}</span>
                                    <span>{new Date(post.createdAt).toLocaleDateString("pt-BR", {month: "short"})}</span>
                                </div>
                                <Image src={post.postImg.url} layout="fill"/>
                            </div>
                            <div className='blog__home__bottom__txt'>
                                <div className='blog__home__author'>Postado por: <span>{post.postAuthor.name}</span></div>
                                <h4>{post.title.length > 75 ? post.title.substr(0, 75) + "..." : post.title}</h4>
                                <p>{post.resume.length > 110 ? post.resume.substr(0, 110) + "..." : post.resume}</p>
                            </div>
                        </BlogCard>
                    )
                })}
                
            </div>

            <div className='blog__home__btn'>
                <ButtonJoin text="Veja mais" link="/blog" />
            </div>
        </div>
    </BlogHomeContainer>
  )
}

export default BlogHome