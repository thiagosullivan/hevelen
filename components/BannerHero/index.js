import React from 'react'
import ButtonJoin from '../ButtonJoin'
import { BannerHeroContainer } from './style'

function BannerHero() {
  return (
    <BannerHeroContainer>
        <h3>Build Up Your Body</h3>
        <h1>Hevelen Jeronymo</h1>
        <p>Build Your Body and Fitness with Professional Touch</p>
        <ButtonJoin text="Join Us" />
    </BannerHeroContainer>
  )
}

export default BannerHero