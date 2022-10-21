import styled from "styled-components";

export const AboutHomeContainer = styled.section`
    max-width: 1400px;
    width: 100%;
    margin: 6.8rem auto;
    padding: 0 2rem;

    .abouthome__col1 {

        display: grid;
        grid-template-areas:
        "title title"
        "aboutp1 aboutimg"
        "aboutp2 aboutimg"
        "aboutp3 aboutimg"
        "showMore showMore"
        "aboutpbottom aboutpbottom";

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
        .hideBtn {
            height: 0 !important;
            opacity: 0;
            transition: all 300ms ease-in;
            overflow-y: hidden;
        }
        .about__pBottom {
            grid-area: aboutpbottom;
            /* transform: rotateX(-90deg); */
            height: 0;
            opacity: 0;
            transition: all 300ms ease-in;
            overflow-y: hidden;
        }
        .showAboutP {
            /* transform: rotateX(0deg); */
            opacity: 1;
            height: 105%;
            margin-top: -30px;
        }
        .abouthome__col2 {
            grid-area: aboutimg;
            margin-left: 2rem;
            margin-bottom: 2rem;
        }
        .about_showMore {
            grid-area: showMore;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 165px;
            height: 50px;
            background-color: ${({theme}) => theme.white};
            color: ${({theme}) => theme.secondary};
            text-transform: uppercase;
            border: 1px solid ${({theme}) => theme.secondary};
            transition: all 150ms ease-in;
            margin: 1rem auto;

            &:hover {
                border: 1px solid ${({theme}) => theme.secondary};
                background-color: transparent;
                color: ${({theme}) => theme.secondary};
                transform: scale(1.02);
            }
        }
        
        @media screen and (max-width: 1260px) {
            p {
                line-height: 25px;
            }
        }

        @media screen and (max-width: 1150px){
            grid-template-areas:
            "title title title"
            "aboutp1 aboutimg aboutimg"
            "aboutp2 aboutimg aboutimg"
            "aboutp3 aboutp3 aboutp3"
            "showMore showMore showMore"
            "aboutpbottom aboutpbottom aboutpbottom";

            p {
                line-height: 35px;
            }
        }

        @media screen and (max-width: 1180px) {
            p {
                line-height: 25px;
            }
        }

        @media screen and (max-width: 960px) {
            grid-template-areas:
            "title"
            "aboutimg"
            "aboutp1"
            "aboutp2"
            "aboutp3"
            "showMore"
            "aboutpbottom";

            h2 {
                text-align: center;
            }
        }
    }
    a {
        margin: 3rem auto 0;
    }
`