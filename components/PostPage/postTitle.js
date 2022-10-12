import Image from 'next/image'
import React from 'react'
import { PostPageTitle } from './style'

function PostTitle({post}) {
  return (
    <PostPageTitle>
        <div className='post__page__content'>
            <h1>{post.title}</h1>
            <div className='post__page__subtitle'>
                <div className='post__page__date'>
                <span>{new Date(post.createdAt).toLocaleDateString("pt-BR", {day: "2-digit"})}</span> de
                <span> {new Date(post.createdAt).toLocaleDateString("pt-BR", {month: "long"})}</span> de
                <span> {new Date(post.createdAt).toLocaleDateString("pt-BR", {year: "numeric"})}</span>
                </div>
                <div className='post__page__author'>
                <p>Postado por:</p>
                <a
                    className='post__page__author__infos'
                    href={post.postAuthor.socialMedia}
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <Image width={50} height={50} src={post.postAuthor.authorImg.url} alt={post.postAuthor.name}/>
                    <p>{post.postAuthor.name}</p>
                </a>
                </div>
            </div>
        </div>
    </PostPageTitle>
  )
}

export default PostTitle