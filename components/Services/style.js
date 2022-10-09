import styled from "styled-components";

export const ServicesContainer = styled.section`
    background: url('https://raw.githubusercontent.com/thiagosullivan/hevelen/main/assets/sec3-banner.jpg') no-repeat;
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
                max-width: 570px;
                line-height: 50px;
            }
        }
        .services__bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    
`

export const ServicesCard = styled.div`
    background-color: ${({theme}) => theme.white};
    max-width: 380px;
    width: 100%;
    padding: 4rem 2.5rem;
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
        line-height: 30px;
    }

`