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
    }
`

function ButtonJoin({ text }) {
  return (
    <ButtonJoinContainer>
        <Link href="/">{text}</Link>
    </ButtonJoinContainer>
  )
}

export default ButtonJoin