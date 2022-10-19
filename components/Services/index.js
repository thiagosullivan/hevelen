import React from 'react';
import ButtonJoin from '../ButtonJoin';
import { CgGym } from 'react-icons/cg';
import { FaHeartbeat } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';
import { ServicesCard, ServicesContainer } from './style';

function Services() {
  return (
    <ServicesContainer id="services">
        <div className='services__content'>
            <p className='subtitle'>No que posso ajudar</p>
            <div className='services__top'>
                <h2>Não existem limites para o corpo <br/> liberte a sua mente</h2>
                <ButtonJoin text="Fale comigo" link="https://api.whatsapp.com/send?phone=554396386856" />
            </div>
            <div className='services__bottom'>
                <ServicesCard>
                    <CgGym />
                    <h4>Emagrecimento</h4>
                    <p>Tenha ajudado muitas pessoas a alcançarem seus objetivos. Com a orientação correta e o treino adequado, certamente chegaremos juntos no seu objetivo.</p>
                </ServicesCard>
                <ServicesCard>
                    <FaHeartbeat />
                    <h4>Ganho de Massa</h4>
                    <p>Este objetivo é totalmente possível. É um caminho que exige conhecimento técnico na elaboração dos treinos e em sua execução. Tenho experiência suficiente para encurtar o seu caminho até o seu objetivo.</p>
                </ServicesCard>
                <ServicesCard>
                    <MdHealthAndSafety />
                    <h4>Qualidade de vida</h4>
                    <p>Livre-se de dores e incômodos causados pelo sedentarismo.Juntos encontraremos um calendário com exercícios simples e que possam gerar mais qualidade de vida para você.</p>
                </ServicesCard>
            </div>
        </div>
    </ServicesContainer>
  )
}

export default Services