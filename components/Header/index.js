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
                <Image src={LogoHeader} width={125} height={95}/>
            </Link>
            <HeaderNavegation>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Sobre</Link>
                    </li>
                    <li>
                        <Link href="/">Preço</Link>
                    </li>
                    <li>
                        <Link href="/">Galeria</Link>
                    </li>
                    <li>
                        <Link href="/">Páginas</Link>
                    </li>
                    <li>
                        <Link href="/">Blog</Link>
                    </li>
                    <li>
                        <Link href="/">Contato</Link>
                    </li>
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
                        href="https://www.google.com.br"
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