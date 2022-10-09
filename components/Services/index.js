import React from 'react';
import ButtonJoin from '../ButtonJoin';
import { CgGym } from 'react-icons/cg';
import { FaHeartbeat } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';
import { ServicesCard, ServicesContainer } from './style';

function Services() {
  return (
    <ServicesContainer>
        <div className='services__content'>
            <p className='subtitle'>Our Services for you</p>
            <div className='services__top'>
                <h2>Push your limits forward we offer to you</h2>
                <ButtonJoin text="More Services" />
            </div>
            <div className='services__bottom'>
                <ServicesCard>
                    <CgGym />
                    <h4>Quality Equipment</h4>
                    <p>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
                </ServicesCard>
                <ServicesCard>
                    <FaHeartbeat />
                    <h4>Health Caring</h4>
                    <p>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
                </ServicesCard>
                <ServicesCard>
                    <MdHealthAndSafety />
                    <h4>Gym Strategies</h4>
                    <p>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
                </ServicesCard>
            </div>
        </div>
    </ServicesContainer>
  )
}

export default Services