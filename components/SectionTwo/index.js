import React from 'react';
import ButtonJoin from '../ButtonJoin';
import { SectionTwoCard, SectionTwoContainer } from './style';

function SectionTwo() {
  return (
    <SectionTwoContainer>
        <h2>Qual o seu objetivo?</h2>
        <div className='section__two__bottom'>
            <SectionTwoCard>
                <div className='card__one'>
                    <div className='card__txt'>
                        <h3>Emagrecimento</h3>
                        <p>Tenho ajudado muitas pessoas a alcançarem seus objetivos. Com a orientação correta e o treino adequado, certamente chegaremos juntos no seu objetivo.</p>
                        <ButtonJoin text="Fale comigo" link="https://api.whatsapp.com/send?phone=554396386856" />
                    </div>
                </div>
            </SectionTwoCard>
            <SectionTwoCard>
                <div className='card__two'>
                    <div className='card__txt'>
                        <h3>Ganho de Massa</h3>
                        <p>Este objetivo é totalmente possível. É um caminho que exige conhecimento técnico na elaboração dos treinos e em sua execução. Tenho experiência suficiente para encurtar o seu caminho até o seu objetivo.</p>
                        <ButtonJoin text="Fale comigo" link="https://api.whatsapp.com/send?phone=554396386856" />
                    </div>
                </div>
            </SectionTwoCard>
        </div>
    </SectionTwoContainer>
  )
}

export default SectionTwo