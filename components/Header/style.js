import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: rgba(0,0,0,.8);
    position: absolute;
    width: 100vw;
    top: 0;
    z-index: 1;

    .header__content {
        padding: 1rem;
        max-width: 1400px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header__col3 {
        display: flex;
        align-items: center;

        button {
            background-color: transparent;
            border: none;
            font-size: 2.7rem;
            color: ${({theme}) => theme.white};
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
        }
    }

    @media screen and (max-width: 1200px){
        .header__content {
            padding: 1rem 2rem;
        }

        .header__col3 {
            button {
                font-size: 2rem;
                margin-right: .5rem;
            }
        }
    }
    @media screen and (max-width: 960px){
        display: none;
    }
`

export const HeaderNavegation = styled.nav`

    ul {
        display: flex;

        li {
            margin: 0 1.1rem;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }
            &:last-child {
                margin-right: 0;
            }
            
            a {
                font-size: 1.5rem;
                color: ${({theme}) => theme.white};
                font-family: 'Teko', sans-serif;
                font-weight: 600;
                letter-spacing: 2px;
                transition: all 100ms ease-in;

                &:hover {
                    color: ${({theme}) => theme.secondary};
                }
            }
        }

    }

    @media screen and (max-width: 1200px) {
        ul {
            li {
                margin: 0 .8rem;

                a {
                    font-size: 1.2rem;
                }
            }
        }
    }
`;

export const HeaderSocialMedia = styled.div`
    display: flex;
    align-items: center;

    a {
        width: 40px;
        height: 40px;
        background-color: ${({theme}) => theme.white};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin: 0 0.62rem;
        transition: all 100ms ease-in;

        &:last-child {
            margin-right: 0;
        }

        &:hover  {
            background-color: ${({theme}) => theme.secondary};
        }
        &:hover > svg  {
            color: ${({theme}) => theme.white};
        }


        svg {
            color: #000000;
            font-size: 25px;
            transition: all 100ms ease-in;
        }

        &:last-child {
            padding-left: 0px;
        }
    }

    @media screen and (max-width: 1200px){
        a {
            width: 30px;
            height: 30px;
            margin: 0 .42rem;
            
            svg {
                font-size: 1.3rem;
            }
        }
    }
`;