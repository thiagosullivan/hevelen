import styled from "styled-components";

export const ServicesContainer = styled.section`
    background: url('https://raw.githubusercontent.com/thiagosullivan/hevelen/main/assets/sec3-banner-2.jpg') no-repeat;
    background-size: cover;

    .services__content {
        max-width: 1400px;
        width: 100%;
        margin: 0 auto;
        padding: 3.75rem 1rem;

        .subtitle {
            font-size: 1.8rem;
            font-family: 'Teko', sans-serif;
            color: ${({theme}) => theme.secondary};
            letter-spacing: 1px;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            margin-bottom: 2rem;
    
            &::before {
                content: '';
                display: block;
                width: 50px;
                height: 3px;
                background-color: ${({theme}) => theme.secondary};
                margin-right: 1rem;
            }
        }
        .services__top {
            display: flex;
            justify-content: space-between;
            margin-bottom: 3.75rem;
            
            h2 {
                font-family: 'Teko', sans-serif;
                font-size: 3.1rem;
                font-weight: bold;
                color: ${({theme}) => theme.white};
                text-transform: uppercase;
                /* max-width: 600px; */
                line-height: 50px;
            }
        }
        .services__bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    @media screen and (max-width: 960px){
        .services__top {
            h2 {
                font-size: 2rem !important;
                line-height: 30px !important;
            }
        }
        .services__bottom {
            flex-direction: column;
        }
    }

    @media screen and (max-width: 710px){
        .services__top {
            h2 {
                font-size: 1.5rem !important;
            }
        }
    }

    @media screen and (max-width: 560px){
        .services__content {
            .services__top {
                flex-direction: column;
                align-items: center;

                h2 {
                    font-size: 1.7rem;
                    line-height: 30px;
                    margin-bottom: 2rem;
                }
            }
        }
    }
`

export const ServicesCard = styled.div`
    background-color: ${({theme}) => theme.white};
    margin: 0 1rem;
    max-width: 380px;
    width: 100%;
    min-height: 412px;
    padding: 2rem 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme}) => theme.primary};

    svg {
        font-size: 4rem;
        margin-bottom: 2.1rem;
    }
    h4 {
        margin-bottom: 2.1rem;
        font-family: 'Teko', sans-serif;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
    }
    p {
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        line-height: 25px;
    }

    @media screen and (max-width: 1120px){
        min-height: 512px;
    }

    @media screen and (max-width: 960px) {
        max-width: 780px;
        min-height: unset;
        margin-bottom: 2rem;

        svg {
            margin-bottom: 1rem;
        }
        h4 {
            margin-bottom: 1rem;
        }
    }

`