import styled from "styled-components";

export const AboutHomeContainer = styled.section`
    max-width: 1400px;
    width: 100%;
    margin: 6.8rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .abouthome__col1 {
        max-width: 550px;
        width: 100%;

        h2 {
            font-family: 'Teko', sans-serif;
            font-size: 3.12rem;
            line-height: 50px;
            font-weight: 700;
            color: ${({theme}) => theme.primary};
            margin-bottom: 2.5rem;
        }
        p {
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
            color: ${({theme}) => theme.primary};
            text-align: justify;
            margin-bottom: 1rem;
            line-height: 25px;
            
            &:last-of-type {
                margin-bottom: 5rem;
            }
        }
    }
`