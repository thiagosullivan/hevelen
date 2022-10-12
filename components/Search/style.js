import styled from "styled-components";

export const SearchContainer = styled.div`
    position: absolute;
    background-color: rgba(0,0,0, .9);
    width: 100vw;
    height: 100vh;
    top: 0;

    .close__search {
        color: ${({theme}) => theme.white};
        font-size: 3rem;
        position: absolute;
        right: 1rem;
        top: 1rem;
        cursor: pointer;
    }
`;

export const SearchForm = styled.form`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    width: 100%;
    display: flex;
    align-items: center;
    
    input {
        background: transparent;
        border: none;
        border-bottom: 1px solid ${({theme}) => theme.white};
        width: 100%;
        color: ${({theme}) => theme.white};
        outline: none;
        font-size: 1.4rem;
        padding: 0 0 .5rem 1rem
    }
`