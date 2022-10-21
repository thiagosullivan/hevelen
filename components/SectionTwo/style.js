import styled from "styled-components";

export const SectionTwoContainer = styled.section`
    background-color: #080808;

    h2 {
        text-align: center;
        font-family: 'Paytone One', sans-serif;
        font-size: 2.5rem;
        color: ${({theme}) => theme.white};
        padding: 3rem 1rem;
    }
    .section__two__bottom {
        display: flex;
        align-items: center;
    }
    
    @media screen and (max-width: 820px){
        h2 {
            font-size: 1.8rem;
        }
        .section__two__bottom {
            flex-direction: column;
        }
    }

`

export const SectionTwoCard = styled.section`
    flex: 1;

    h3 {
        font-family: 'Paytone One', sans-serif;
        font-size: 2.5rem;
        color: ${({theme}) => theme.white};

    }
    .card__one {
        background: url('https://raw.githubusercontent.com/thiagosullivan/hevelen/main/assets/sec2-img.jpg') no-repeat;
        background-size: cover;
        background-position: center center;
        padding: 0 2rem;
    }
    .card__two {
        background: url('https://raw.githubusercontent.com/thiagosullivan/hevelen/main/assets/sec2-img-2.jpg') no-repeat;
        background-size: cover;
        background-position: center center;
        padding: 0 2rem;
    }
    .card__txt {
        max-width: 550px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 12rem 0;
        color: ${({theme}) => theme.white};

        h3, p {
            margin-bottom: 1.37rem;
        }

        p {
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
            line-height: 28px;
        }
    }

    @media screen and (max-width: 820px){

        width: 100%;
        .card__txt {
            max-width: unset;
            padding: 6rem 0;
        }
    }
    @media screen and (max-width: 520px) {
        h3 {
            font-size: 1.7rem;
            letter-spacing: 2px;
        }
    }
`