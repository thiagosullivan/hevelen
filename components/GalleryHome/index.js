import Image from 'next/image';
import React from 'react';
import data from '../../data/images.json';
import { GalleryHomeContainer } from './style';

function GalleryHome() {
    // console.log(data)
  return (
    <GalleryHomeContainer>
        
        <p className='subtitle'>Galeria</p>
        <div className='gallery__container'>
            {data.map ((image, index) => {
                    return (
                        <a
                            key={index}
                            className='image__container'
                            href={image.url}
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <Image src={image.image} layout="fill" />
                        </a>
                        // <img src={image.url} />
                    )
                }
            )}
        </div>
        <a  
            className='viewmore__gallery'
            href="https://www.instagram.com/hevelenjeronymo/"
            rel="noreferrer noopener"
            target="_blank"
        >
            View More
        </a>
    </GalleryHomeContainer>
  )
}

export default GalleryHome