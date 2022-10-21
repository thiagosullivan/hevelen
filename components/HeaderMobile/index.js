import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import useScrollBlock from '../../hook/pageScroll';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import LogoHeader from '../../assets/hevelen-logo.webp';
import { HeaderContainer, HeaderMobileContent, HeaderMobileNav, HeaderNavegation, HeaderSocialMedia, SearchContainer } from './style';
import SearchComp from '../Search';
import { HeaderMobileContainer } from './style'

function HeaderMobile() {

    const [blockScroll, allowScroll] = useScrollBlock();
    const [ showSearch, setShowSearch ] = useState(false);
    const [ showHeader, setShowHeader ] = useState(false);

    console.log(showHeader)

    if(showSearch == true || showHeader == true){
        blockScroll();
    } else {
        allowScroll();
    }

  return (
    <>
        <HeaderMobileContainer>
            <div className='header__mobile__content'>
                <Link href="/">
                    <a>
                        <Image src={LogoHeader} width={66} height={50} alt="Logo Header"/>
                    </a>
                </Link>

                <div className='header__mobile__col2'>
                    <button onClick={() => setShowSearch(true)}>
                        <AiOutlineSearch />
                    </button>
                    <div className={`header__mobile__nav ${showHeader ? "mobileActive" : ''}`} onClick={() => setShowHeader(!showHeader)}>
                        <div className="header__mobile__hamburger">
                        </div>
                    </div>
                </div>
            </div>
            {showHeader && 
                <HeaderMobileContent>
                    <ul>
                        <li onClick={() => setShowHeader(!showHeader)}><Link href="/">Home</Link></li>
                        <li onClick={() => setShowHeader(!showHeader)}><Link href="/#about">Sobre</Link></li>
                        <li onClick={() => setShowHeader(!showHeader)}><Link href="/#services">Serviços</Link></li>
                        <li onClick={() => setShowHeader(!showHeader)}><Link href="/#gallery">Galeria</Link></li>
                        <li onClick={() => setShowHeader(!showHeader)}><Link href="/blog">Blog</Link></li>
                        <li onClick={() => setShowHeader(!showHeader)}><Link href="/contato">Contato</Link></li>
                    </ul>
                    <div className='header__mobile__socialmedia'>
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
                    </div>
                </HeaderMobileContent>
            }
        { showSearch && <SearchComp setShowSearch={setShowSearch} /> }
        </HeaderMobileContainer>
    </>
  )
}

export default HeaderMobile