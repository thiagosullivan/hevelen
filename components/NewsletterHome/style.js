import styled from "styled-components";

export const NewsLetterHomeContainer = styled.section`
    background: url('https://raw.githubusercontent.com/thiagosullivan/hevelen/main/assets/newsletter-banner-2.jpg') no-repeat;
    background-size: cover;
    padding: 5.6rem 1rem;
    position: relative;
    overflow: hidden;

    .newsletter__content {
        max-width: 1400px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            font-family: 'Paytone One', sans-serif;
            font-size: 1.87rem;
            letter-spacing: 2px;
            color: ${({theme}) => theme.white};
            margin-bottom: 1.87rem;
        }
        p {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.12rem;
            color: ${({theme}) => theme.white};
            margin-bottom: 2.5rem;
        }
    }

    &::after {
        position: absolute;
        top: 0;
        right: 50%;
        content: '';
        width: 100%;
        height: 800px;
        z-index: 1;
        background: #9870FC;
        background: ${({theme}) => theme.secondary};
        -webkit-transform: skewY(-60deg);
        -moz-transform: skewY(-60deg);
        -ms-transform: skewY(-60deg);
        -o-transform: skewY(-60deg);
        transform: skewY(-60deg);
    }
`

export const NewsletterForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;

    input {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${({theme}) => theme.white};
        max-width: 400px;
        width: 100%;
        height: 100%;  
        padding: 0 0 1rem 1rem;
        color: ${({theme}) => theme.white};
        font-size: 1.12rem;
        outline: none;

        &::placeholder {
            color: ${({theme}) => theme.white};
        }
    }
    button {
        height: 100%;
        border-bottom-right-radius: 30px;
        border-top-right-radius: 30px;
        padding: 0.75rem;
        background-color: ${({theme}) => theme.secondary};
        color: ${({theme}) => theme.white};
        border: 1px solid transparent;
        transition: all 150ms ease-in;

        &:hover {
            background-color: ${({theme}) => theme.white};
            border: 1px solid ${({theme}) => theme.secondary};
            color: ${({theme}) => theme.secondary};
        }
    }
`;