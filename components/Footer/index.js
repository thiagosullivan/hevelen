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
                        <Image src={FooterLogo} width={200} height={150}/>
                    </Link>
                    <p>Far from the countries Vokalia and Consonantia, the live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                </div>
                <nav>
                    <p>Links Rápidos</p>
                    <ul>
                        <li>
                            <GrFormCheckmark />
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <GrFormCheckmark />
                            <Link href="/">About Us</Link>
                        </li>
                        <li>
                            <GrFormCheckmark />
                            <Link href="/">Testimonials</Link>
                        </li>
                        <li>
                            <GrFormCheckmark />
                            <Link href="/">Classes</Link>
                        </li>
                        <li>
                            <GrFormCheckmark />
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <GrFormCheckmark />
                            <Link href="/">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className='footer__col3'>
                    <p>Informações de Contato</p>
                    <div className='contact__footer'>
                        <div>
                            <MdLocationPin />
                            <p>Informações de Contato</p>
                        </div>
                        <a
                            href='https://www.google.com.br'
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <MdPhone />
                            <p>+ 1235 2355 98</p>
                        </a>
                        <a
                            href='https://www.google.com.br'
                            rel="noreferrer noopener"
                            target="_blank"
                        >   
                            <MdOutlineEmail />
                            <p>info@yoursite.com</p>
                        </a>
                        <div>
                            <AiOutlineClockCircle />
                            <p>8:00 am - 6:00pm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__bottom'>
                <p>© 2022 <strong>Hevelen Jeronymo</strong> - Desenvolvido por <strong>Digital Cloud Marketing</strong>.</p>
            </div>
        </div>

    </FooterContainer>
  )
}

export default Footer