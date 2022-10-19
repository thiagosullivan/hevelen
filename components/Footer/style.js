import { lighten } from "polished";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${({theme}) => theme.primary};
    padding: 0 1rem;

    .footer__content {
        .footer__top {
            max-width: 1400px;
            width: 100%;
            margin: 0 auto;
            padding: 6.25rem 0;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            .footer__col1 {
                max-width: 525px;
                width: 100%;
                height: auto;
                display: flex;
                
                span {
                    cursor: pointer;
                }
                p {
                    max-width: 290px;
                    color: ${({theme}) => theme.white};
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 300;
                    line-height: 25px;
                    margin-left: 2rem;
                }
            }
            nav {
                p {
                    font-family: 'Teko', sans-serif;
                    color: ${({theme}) => theme.white};
                    font-size: 2rem;
                    margin-bottom: 1.5rem;
                }
                li {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 300;
                    color: ${({theme}) => theme.white};                    
                    margin-bottom: .1rem;
                    cursor: pointer;
                    width: max-content;

                    svg {
                        font-size: 2.5rem;
                        margin-right: .2rem;

                        polyline {
                            stroke: ${({theme}) => theme.secondary};                            
                            transition: all 150ms ease-out;
                        }
                    }
                    a {
                        font-size: 1rem;
                        border: 1px solid transparent;
                        transition: all 150ms ease-out;
                        display: flex;
                        align-items: center;
                    }

                    p {
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 300;
                        color: ${({theme}) => theme.white};
                        font-size: 1rem;
                        margin-bottom: 0;
                    }

                    &:hover a {
                        border-bottom: 1px solid ${({ theme }) => theme.secondary};
                    }
                    &:hover a polyline {
                        stroke: ${({ theme }) => theme.white};
                    }
                }
            }
            .footer__col3 {
                p:first-child {
                    font-family: 'Teko', sans-serif;
                    color: ${({theme}) => theme.white};
                    font-size: 2rem;
                    margin-bottom: 1.5rem;
                }
                .contact__footer {
                    svg {
                        color: ${({theme}) => theme.secondary};
                        font-size: 2.5rem;
                        margin-right: .8rem;
                    }
                    div {
                        display: flex;
                        align-items: center;
                        margin-bottom: 1rem;

                        p {
                            color: ${({theme}) => theme.white};
                        }
                    }
                    a {
                        display: flex;
                        align-items: center;
                        color: ${({theme}) => theme.white};
                        margin-bottom: 1rem;
                        transition: all 150ms ease-out;

                        &:hover {
                            color: ${({theme}) => theme.secondary};
                        }
                        &:hover svg {
                            color: ${({theme}) => theme.white};
                        }
                    }
                }

            }

        }
        .footer__bottom {
            color: ${({theme}) => theme.white};
            text-align: center;
            padding-bottom: 3.75rem;
        }
    }
`;