import styled from "styled-components";

export const BlogHomeContainer = styled.section`
    .bloghome__content {
        max-width: 1400px;
        width: 100%;
        margin: 0 auto;
        padding: 6.25rem 1rem;
        
        h2 {
            font-size: 2rem;
            text-align: center;
            margin-bottom: 1.2rem;
        }

        .bloghome__subtitle {
            max-width: 735px;
            width: 100%;
            margin: 0 auto 6.5rem;
            text-align: center;
        }
        .blog__content {
            /* display: flex;
            justify-content: space-between; */
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            justify-items: center;
            margin-bottom: 2.5rem;

            /* @media screen and (max-width: 760px) {
                flex-wrap: wrap;
            } */
        }

        .blog__home__btn {
            a {
                margin: 0 auto;
            }
        }
    }
`;

export const BlogCard = styled.section`
    max-width: 365px;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    border-radius: 5px;
    overflow: hidden;
    margin: 0 .5rem;
    transition: all 150ms ease-out;

    .blog__home__img {
        max-width: 365px;
        width: 100%;
        height: 252px;
        position: relative;

        .blog__home__date {
            position: absolute;
            top: 0;
            left: 1.2rem;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-shadow: 0 0 5px rgba(0,0,0,.5);

            span {
                font-size: 1.25rem;
                font-weight: bold;
                text-transform: uppercase;
                background-color: ${({theme}) => theme.secondary};
                width: 45px;
                height: 45px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${({theme}) => theme.white};

                &:last-child {
                    background-color: ${({theme}) => theme.white};
                    font-size: 0.8rem;
                    width: 45px;
                    height: 30px;
                    color: ${({theme}) => theme.primary};
                }
            }
        }

        @media screen and (max-width: 960px) {
            height: 200px;
        }
    }
    .blog__home__bottom__txt {
        padding: 1rem 2rem 2rem;

        .blog__home__author {
            color: ${({theme}) => theme.greythird};
            font-size: 1.1rem;
            font-weight: 400;
            text-align: center;
            
            span {
                color: ${({theme}) => theme.primary};
            }
        }
        h4 {
            font-weight: 600;
            font-size: 1.27rem;
            min-height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: .75rem 0;
            line-height: 23px;
            text-align: center;
        }
        p {
            color: ${({theme}) => theme.greythird};
            line-height: 25px;
            text-align: center;
        }

        @media screen and (max-width: 960px){
            padding: 1rem;

            .blog__home__author {
                margin-bottom: 2rem;
            }

            h4 {
                min-height: unset;
            }
        }
    }

    &:hover {
        box-shadow: 0px 0px 8px rgba(0,0,0,.25);
    }

    @media screen and (max-width: 760px) {
        max-width: 330px;
    }
`;