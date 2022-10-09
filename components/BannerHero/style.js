import styled from "styled-components";

export const BannerHeroContainer = styled.section`
    backdrop-filter: brightness(.1);
    background-image: url('https://raw.githubusercontent.com/thiagosullivan/hevelen/main/assets/banner-hero.jpg');
    background-repeat: no-repeat;
    background-size: cover;
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
    }
    h1 {
        font-size: 8.4rem;
        font-family: 'Paytone One', sans-serif;
        text-transform: uppercase;
        text-align: center;
    }
    p {
        font-size: 1.25rem;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        margin-bottom: 2.5rem;
    }
`;