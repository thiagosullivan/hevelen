import styled from "styled-components";

export const BannerHeroContainer = styled.section`
    backdrop-filter: brightness(.1);
    background-image: url('https://raw.githubusercontent.com/thiagosullivan/hevelen/main/assets/banner-hero-hev-2.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 20rem 0;
    color: ${({theme}) => theme.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h3 {
        font-size: 2.5rem;
        font-family: 'Paytone One', sans-serif;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 2px;
        text-shadow: 0 0 5px rgba(0, 0, 0, .8);
    }
    h1 {
        font-size: 8.4rem;
        font-family: 'Paytone One', sans-serif;
        text-transform: uppercase;
        text-align: center;
        text-shadow: 0 0 5px rgba(0, 0, 0, .8);
    }
    p {
        font-size: 1.25rem;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        margin-bottom: 2.5rem;
        text-shadow: 0 0 5px rgba(0, 0, 0, .8);
    }

    @media screen and (max-width: 960px) {
        padding: 10rem 2rem;

        h3 {
            font-size: 1.7rem;
            margin-bottom: 1rem;
        }
        h1 {
            font-size: 6rem;
            margin-bottom: 2rem;
            line-height: 90px;
        }
    }

    @media screen and (max-width: 580px){
        h3 {
            font-size: 1rem;
            margin-bottom: 3rem;
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 4rem;
            line-height: 50px;
        }
    }
`;