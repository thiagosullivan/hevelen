import styled from "styled-components";

export const GalleryHomeContainer = styled.section`
    width: 100%;
    display: block;

    .gallery__container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        /* -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
        -webkit-column-width: 33%;
        -moz-column-width: 33%;
        column-width: 33%;
        padding: 0 12px; */

        .image__container {
            position: relative;
            width: 100%;
            height: 400px;
            object-fit: cover;
            object-position: 50% 50%;
            
            img {
                object-fit: cover;
                transition: all 150ms ease-out;
            }

            &:hover img {
                transform: scale(1.1);
            }
        }

        @media screen and (max-width: 790px){
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 490px){
            grid-template-columns: repeat(1, 1fr);
        }
    }

    .viewmore__gallery {
        display: flex;
        justify-content: center;
        text-align: center;
        background-color: ${({theme}) => theme.secondary};
        color: ${({theme}) => theme.white};
        width: 100%;
        padding: 2rem 0;
        font-family: 'Teko', sans-serif;
        font-size: 2.5rem;
        border: 2px solid transparent;
        box-shadow: 0px 0px 4px rgba(0,0,0,.8);
        transition: all 150ms ease-out;
        line-height: 1;

        &:hover {
            border: 2px solid ${({theme}) => theme.secondary};
            color: ${({theme}) => theme.secondary};
            background-color: transparent;
        }
    }

    .subtitle {
        font-size: 1.8rem;
        font-family: 'Teko', sans-serif;
        color: ${({theme}) => theme.secondary};
        letter-spacing: 1px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        max-width: 1400px;
        width: 100%;
        margin: 0 auto 2rem;

        &::before {
            content: '';
            display: block;
            width: 50px;
            height: 3px;
            background-color: ${({theme}) => theme.secondary};
            margin-right: 1rem;
        }
    }
`;