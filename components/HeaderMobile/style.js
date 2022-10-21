import styled from "styled-components";

export const HeaderMobileContainer = styled.header`
    display: none;
    position: fixed;
    z-index: 2;
    background-color: rgba(0,0,0,.8);
    max-width: 960px;
    width: 100%;

    .header__mobile__content {
        padding: .5rem 1rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header__mobile__col2 {
        display: flex;
        align-items: center;

        button {
            background-color: transparent;
            border: none;
            color: ${({theme}) => theme.white};
            font-size: 2rem;
            max-height: 32px;
        }

        .header__mobile__nav {
            margin-left: 1.5rem;

            .header__mobile__hamburger {
                border-top: 3px solid ${({theme}) => theme.white};
                width: 35px;
            }

            .header__mobile__hamburger::after, .header__mobile__hamburger::before {
                content: '';
                display: block;
                width: 35px;
                height: 3px;
                background-color: ${({theme}) => theme.white};
                margin-top: 7px;
                transition: all 150ms ease-in;
                position: relative;
            }
        }
        .header__mobile__nav.mobileActive .header__mobile__hamburger{
            border-top-color: transparent;
        }
        .header__mobile__nav.mobileActive .header__mobile__hamburger::before{
            transform: rotate(135deg);
        }
        .header__mobile__nav.mobileActive .header__mobile__hamburger::after{
            transform: rotate(-135deg);
            top: -10px;
        }
    }

    @media screen and (max-width: 960px){
        display: flex;
    }
`;

export const HeaderMobileContent = styled.nav`
    background-color: rgba(0,0,0,.9);
    color: ${({theme}) => theme.white};
    position: fixed;
    width: 100vw;
    top: 70px;
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ul {
        margin-bottom: 3rem;

        li {
            margin-bottom: 1rem;

            a {
                font-size: 2rem;
                font-family: 'Teko', sans-serif;
                font-weight: 600;
                letter-spacing: 2px;
                transition: all 100ms ease-in;                
            }
        }
    }
    .header__mobile__socialmedia {
        font-size: 2rem;
        display: flex;
        border-top: 1px solid ${({theme}) => theme.white};
        padding-top: 1rem;

        a {
            background-color: ${({theme}) => theme.white};
            color: ${({theme}) => theme.primary};
            display: flex;
            justify-content: center;
            align-items: center;
            width: 55px;
            height: 55px;
            border-radius: 50%;
            margin: 0 .5rem;
        }
    }
`