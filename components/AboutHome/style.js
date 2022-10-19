import styled from "styled-components";

export const AboutHomeContainer = styled.section`
    max-width: 1400px;
    width: 100%;
    margin: 6.8rem auto;

    .abouthome__col1 {

        display: grid;
        grid-template-areas:
        "title title"
        "aboutp1 aboutimg"
        "aboutp2 aboutimg"
        "aboutp3 aboutimg"
        "aboutp4 aboutp4"
        "aboutp5 aboutp5";

        h2 {
            font-family: 'Teko', sans-serif;
            font-size: 3.12rem;
            line-height: 50px;
            font-weight: 700;
            color: ${({theme}) => theme.primary};
            margin-bottom: 2.5rem;
            grid-area: title;
            letter-spacing: 2px;
        }
        p {
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
            color: ${({theme}) => theme.primary};
            text-align: justify;
            margin-bottom: 1rem;
            line-height: 35px;
        }
        .about__p1 {
            grid-area: aboutp1;
        }
        .about__p2 {
            grid-area: aboutp2;
        }
        .about__p3 {
            grid-area: aboutp3;
        }
        .about__p4 {
            grid-area: aboutp4;
        }
        .about__p5 {
            grid-area: aboutp5;
        }
        .abouthome__col2 {
            grid-area: aboutimg;
            margin-left: 2rem;
            margin-bottom: 2rem;
        }
    }
    a {
        margin: 3rem auto 0;
    }
`