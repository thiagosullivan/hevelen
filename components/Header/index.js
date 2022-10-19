import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useScrollBlock from '../../hook/pageScroll';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import LogoHeader from '../../assets/hevelen-logo.webp';
import { HeaderContainer, HeaderNavegation, HeaderSocialMedia, SearchContainer } from './style';
import SearchComp from '../Search';

function Header() {

    const [blockScroll, allowScroll] = useScrollBlock();
    const [ showSearch, setShowSearch ] = useState(false);

  return (
    <HeaderContainer>
        <div className='header__content'>
            <Link href="/">
                <a>
                    <Image src={LogoHeader} width={125} height={95} alt="Logo Header"/>
                </a>
            </Link>
            <HeaderNavegation>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/#about">Sobre</Link></li>
                    <li><Link href="/#services">Serviços</Link></li>
                    <li><Link href="/#gallery">Galeria</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contato">Contato</Link></li>
                </ul>
            </HeaderNavegation>
            <div className='header__col3'>
                <button onClick={() => setShowSearch(true)}>
                    <AiOutlineSearch />
                </button>
                <HeaderSocialMedia>
                    <a
                        href="https://www.instagram.com/hevelenjeronymo/"
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=100066586125256"
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=554396386856"
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        <FaWhatsapp />
                    </a>
                </HeaderSocialMedia>
            </div>
        </div>
        { showSearch && <SearchComp setShowSearch={setShowSearch} /> }
    </HeaderContainer>
  )
}

export default Header