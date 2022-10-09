import React from 'react';
import ButtonJoin from '../ButtonJoin';
import { SectionTwoCard, SectionTwoContainer } from './style';

function SectionTwo() {
  return (
    <SectionTwoContainer>
        <SectionTwoCard>
            <div className='card__one'>
                <div className='card__txt'>
                    <h3>For Girls</h3>
                    <p>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration.</p>
                    <ButtonJoin text="Join Us" link="/" />
                </div>
            </div>
        </SectionTwoCard>
        <SectionTwoCard>
            <div className='card__two'>
                <div className='card__txt'>
                    <h3>For Boys</h3>
                    <p>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration.</p>
                    <ButtonJoin text="Join Us" link="/" />
                </div>
            </div>
        </SectionTwoCard>
    </SectionTwoContainer>
  )
}

export default SectionTwo