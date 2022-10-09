import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const ButtonJoinContainer = styled.div`
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 165px;
        height: 50px;
        background-color: ${({theme}) => theme.secondary};
        color: ${({theme}) => theme.white};
        text-transform: uppercase;
        border: 1px solid transparent;
        transition: all 150ms ease-in;

        &:hover {
            border: 1px solid ${({theme}) => theme.secondary};
            background-color: transparent;
            color: ${({theme}) => theme.secondary};
            transform: scale(1.02);
        }
    }
`

function ButtonJoin({ text, link }) {
  return (
    <ButtonJoinContainer>
        <Link href={link}>{text}</Link>
    </ButtonJoinContainer>
  )
}

export default ButtonJoin