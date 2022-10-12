import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import ReactMarkdown from 'react-markdown';
import Aside from '../Aside';
import { PostContent, PostContentImg, PostPageContainer } from './style'

function PostPage({post, categories}) {

  const str = post.video

  let mySubString

  if(str.includes('youtu.be')){
    mySubString = str.substring(
      str.indexOf(".be/") + 4,
      str.lastIndexOf("")
    );
  } else {
     mySubString = str.substring(
      str.indexOf("=") + 1,
      str.lastIndexOf("&")
    );
  }

  return (
    <PostPageContainer>
        <div className='post__page__bottom'>
          <PostContent>
            {/* <div className='post__image' postContentImage={post.postImg.url}>
              <Image src={post.postImg.url} layout="fill" />
            </div> */}
            <PostContentImg postContentImage={post.postImg.url}/>
            <div className='post__page__txt'>
              <ReactMarkdown>
                {post.text}
              </ReactMarkdown>
              {post.video ?
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${mySubString}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
                : ''
              }
            </div>
            <div className='post__categories'>
              Categorias:
              {post.postCategory.map((cat, index) => {
                return (
                  <Link key={index} href={`categoria/${cat.categorySlug}`}>
                    {cat.categoryName}
                  </Link>
                )
              })}
            </div>
          </PostContent>
          {/* <Aside categories={categories} /> */}
        </div>
    </PostPageContainer>
  )
}

export default PostPage;