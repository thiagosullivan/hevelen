import Image from 'next/image';
import React, { useState } from 'react';
import ButtonJoin from '../ButtonJoin';
import AboutImage from '../../assets/about-img.webp';
import { AboutHomeContainer } from './style';

function AboutHome() {

  const [ showP, setShowP ] = useState(false);

  return (
    <AboutHomeContainer id="about">
        <div className='abouthome__col1'>
            <h2>Quem é Hevelen Jeronymo?</h2>
            <p className='about__p1'>Olá, muito prazer, eu sou a Hevelen Jeronymo, tenho 37 anos, sou apaixonada pelo movimento e entusiasta da saúde. Comecei no esporte ainda criança com aulas de natação, sempre muito ativa e apaixonada por esportes. Durante a adolescência conheci várias modalidades individuais do fitness e aí encontrei minha verdadeira paixão.</p>
            <p className='about__p2'>Mas, minha trajetória no esporte nem sempre foi fácil. Aos 19 ingressei na faculdade de Educação Física, meu sonho, mas desisti no primeiro ano. Apesar de amar esportes, naquele momento estava bastante desanimada e passei a não acreditar na profissão que havia escolhido. Acabei fazendo uma mudança 360 e ingressei na área administrativa, onde atuei por 16 anos. Um dos fatores que me levaram até o esporte era o medo que sempre tive de engordar, já que minha genética apontava para isso. Aos 25 anos comecei a correr, &#34;afinal, correr emagrece&#34;, ou era o que eu pensava na época. Com o tempo me apaixonei, comecei a me dedicar cada vez mais.</p>
            <p className='about__p3'>Quando me casei e mudei para Londrina-Pr, eu e meu marido continuamos na corrida, agora com um grupo profissional, que me envolveu cada vez mais com essa modalidade. Comecei a participar de provas, ganhei troféus e estava cada dia mais resistente até que comecei a me lesionar. Não entendia o que estava acontecendo, pois eu tinha a orientação de meu instrutor, profissional de ponta, e fazia corretamente as atividades de aquecimento, condicionamento, etc. Uma das lesões que tive, a mais grave, me levou a investigar as causas e, depois de uma bateria de exames, descobri uma menopausa precoce, aos 32 anos. Neste momento tudo mudou. </p>
            <button className={`about_showMore ${showP ? "hideBtn" : ''}`} onClick={() => setShowP(true)}>Mostrar mais</button>
            <div className={`about__pBottom ${showP ? "showAboutP" : ''}`}>
              <p className='about__p4'>Devido a lesão eu não conseguia mais correr, não poderia mais engravidar e de repente tudo perdeu o sentido. Mas eu sabia que tinha que fazer algo e passei a investigar alternativas de treinamento. Então, descobri o treino funcional &#40;kettlebell&#41;, totalmente compatível com minha situação. Me encantei com a força, e me joguei nos levantamentos básicos. Apesar de estar treinando, algo que sempre me realizou, a vida ainda não tinha sentido para mim. Faltava algo.</p>
              <p className='about__p5'>Foi ai que resolvi retomar meu sonho de juventude e, aos 34 anos, voltei estudar educação física, que hoje faz muito mais sentido para mim ao promover a saúde pelo esporte, algo que sempre acreditei. Com o andamento dos meus treinos funcionais e devido a força e às altas cargas, comecei a ficar muito volumosa, algo que passou a me incomodar bastante. Novamente fui procurar me informar e cheguei até a musculação. Pronto, agora tudo passou fazer sentido para mim, as coisas se encaixaram e cada dia mais me vejo apaixonada por essa prática. A musculação me , mantém em movimento &#40;o que amo&#41; e me ajuda a desfrutar de inúmeros benefícios e possibilidades que eu jamais imaginei.</p>
              <p className='about__p6'>Acredito que cada experiência que adquiri nestes muitos anos de prática esportiva irão me ajudar a entender melhor meus futuros alunos, suas dores e conseguir oferecer à eles, de forma segura e personalizada, a melhor modalidade de treinamento para a conquista da saúde!</p>
              <button className='about_showMore' onClick={() => setShowP(false)}>Mostrar menos</button>
            </div>
            <div className='abouthome__col2'>
                <Image src={AboutImage} width={780} height={900} alt="Heleven Jeronymo"/>
            </div>
        </div>
        {/* <ButtonJoin text='Fale comigo' link="https://api.whatsapp.com/send?phone=554396386856" /> */}
    </AboutHomeContainer>
  )
}

export default AboutHome