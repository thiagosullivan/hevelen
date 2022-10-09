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
    }
`

function ButtonJoin() {
  return (
    <ButtonJoinContainer>
        <Link href="/">Join Us</Link>
    </ButtonJoinContainer>
  )
}

export default ButtonJoin