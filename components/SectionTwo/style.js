import styled from "styled-components";

export const SectionTwoContainer = styled.section`
    display: flex;
    align-items: center;
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
    }
    .card__two {
        background: url('https://raw.githubusercontent.com/thiagosullivan/hevelen/main/assets/sec2-img-2.jpg') no-repeat;
        background-size: cover;
    }
    .card__txt {
        max-width: 400px;
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
`