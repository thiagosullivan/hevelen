import styled from "styled-components";

export const PostPageContainer = styled.section`
    

    /* .post__page__bottom {
        display: flex;
        max-width: 1400px;
        width: 100%;
        margin: 3.1rem auto 5rem;
    } */

`;

export const PostContent = styled.div`
    margin-right: 2rem;
    
    .post__image {
        width: 50px;
        height: 50px;
        background: url(${props => props.postContentImage});
        background-size: cover;
        background-position: center;
    }
    .post__page__txt {
        h1, h2, h3, h4 {
            margin-bottom: 1rem;
            margin-left: 1rem;
        }
        p {
            text-align: justify;
            margin-bottom: 1rem;
            line-height: 25px;
        }
        blockquote {
            max-width: 320px;
            margin: 4rem 2rem;
            p {
                color: #9f9f9f;
            }
            
            &::before {
                content: '"';
                display: block;
                font-size: 5rem;
                line-height: 0;
                margin-bottom: 1rem;
                color: ${({theme}) => theme.third};
            }
        }
        a {
            color: #0f9ad1;
            text-decoration: underline;
        }

        border-bottom: 1px solid rgba(0,0,0,.1);
        padding-bottom: 3rem;
        margin-bottom: 2rem;
    }
    .post__categories {
        font-size: 1.2rem;
        color: ${({theme}) => theme.greythird};

        a {
            margin: 0 10px;
            background-color: ${({theme}) => theme.secondary};
            padding: 5px 15px;
            color: ${({theme}) => theme.white};
            box-shadow: 0 0 4px rgba(0,0,0,.4);
            transition: all 100ms ease-in-out;

            &:hover {
                box-shadow: 0 0 6px rgba(0,0,0,.7);
            }
        }
    }
`;

export const PostContentImg = styled.div`
    max-width: 930px;
    width: 100%;
    height: 500px;
    background: url(${props => props.postContentImage});
    background-size: cover;
    background-position: center center;
    margin: 0 auto 3.75rem;   
`;

export const PostPageTitle = styled.div`
    background-color: ${({theme}) => theme.third};
    padding: 10rem 1rem 3rem;

    .post__page__content {
        max-width: 1400px;
        width: 100%;
        margin: 0 auto;
        
        h1 {
            color: ${({theme}) => theme.white};
            font-family: 'Paytone One', sans-serif;
            font-weight: bold;
            font-size: 3.75rem;
            letter-spacing: 2px;
            line-height: 65px;
            margin-bottom: 3rem;
            text-align: center;
        }

        .post__page__subtitle {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.3rem;
            font-weight: 300;
            display: flex;
            align-items: center;
            justify-content: center;

            .post__page__date {
                color: ${({theme}) => theme.white};
                margin-right: 1rem;

                span:nth-child(2) {
                    text-transform: capitalize;
                }
            }
            .post__page__author {
                display: flex;
                align-items: center;

                &:before {
                    content: '•';
                    display: block;
                    font-size: 3rem;
                    margin-right: 10px;
                    margin-bottom: 5px;
                    color: ${({theme}) => theme.white};
                }
                
                p {
                    color: ${({theme}) => theme.white};
                    margin-right: 10px;
                }
                
                .post__page__author__infos {
                    display: flex;
                    align-items: center;
                    
                    p {
                        color: ${({theme}) => theme.secondary};
                        margin-left: 10px;
                    }

                    img {
                        border-radius: 50%;
                    }
                }
            }
        }
    }

`