import React from 'react'
import ButtonJoin from '../ButtonJoin'
import { BannerHeroContainer } from './style'

function BannerHero() {
  return (
    <BannerHeroContainer>
        <h3>Construa seu corpo</h3>
        <h1>Hevelen Jeronymo</h1>
        <p>O meu compromisso é o seu objetivo.</p>
        <ButtonJoin text="Fale comigo" link="https://api.whatsapp.com/send?phone=554396386856" />
    </BannerHeroContainer>
  )
}

export default BannerHero