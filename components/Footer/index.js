import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GrFormCheckmark } from 'react-icons/gr';
import { MdLocationPin, MdOutlineEmail, MdPhone } from 'react-icons/md';
import FooterLogo from '../../assets/hevelen-logo.webp';
import { FooterContainer } from './style';

function Footer() {
  return (
    <FooterContainer>
        <div className='footer__content'>
            <div className='footer__top'>
                <div className='footer__col1'>
                    <Link href="/">
                        <Image src={FooterLogo} width={200} height={150} alt="Logo footer"/>
                    </Link>
                    <p>Hevelen Jeronymo, Profissional de Educação Física especialista em gerar resultados. Flexibilidade para realizar seu treino em qualquer academia, sem ficar preso a horários. Personal Trainer em Londrina-PR</p>
                </div>
                <nav>
                    <p>Links Rápidos</p>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>
                                    <GrFormCheckmark />
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#about">
                                <a>
                                    <GrFormCheckmark />
                                    Sobre
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#services">
                                <a>
                                    <GrFormCheckmark />
                                    Serviços
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#gallery">
                                <a>
                                    <GrFormCheckmark />
                                    Galeria
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>
                                    <GrFormCheckmark />
                                    Blog
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contato">
                                <a>
                                    <GrFormCheckmark />
                                    Contato
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='footer__col3'>
                    <p>Informações de Contato</p>
                    <div className='contact__footer'>
                        <div>
                            <MdLocationPin />
                            <p>Rua Higienópolis, 1000 <br/>
                                Centro, Londrina - PR
                            </p>
                        </div>
                        <a
                            href='https://www.google.com.br'
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <MdPhone />
                            <p>&#40;43&#41; 9638-6856</p>
                        </a>
                        <a
                            href='https://www.google.com.br'
                            rel="noreferrer noopener"
                            target="_blank"
                        >   
                            <MdOutlineEmail />
                            <p>contato@heveleneducadorafisica.com.br</p>
                        </a>
                        <div>
                            <AiOutlineClockCircle />
                            <p>8:00 am - 6:00pm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__bottom'>
                <p>© 2022 <strong>Hevelen Jeronymo</strong> - Desenvolvido por <strong><a href="https://digitalcloudbrasil.com.br/" rel="noreferrer noopener"
                target="_blank">Digital Cloud Marketing</a></strong>.</p>
            </div>
        </div>

    </FooterContainer>
  )
}

export default Footer