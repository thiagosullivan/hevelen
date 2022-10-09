import Image from 'next/image';
import React from 'react';
import ButtonJoin from '../ButtonJoin';
import AboutImage from '../../assets/about-img.webp';
import { AboutHomeContainer } from './style';

function AboutHome() {
  return (
    <AboutHomeContainer>
        <div className='abouthome__col1'>
            <h2>We are Fitloss. A Dedicated Fitness Center Since 2004</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <ButtonJoin text='Join Us' link="/" />
        </div>
        <div className='abouthome__col2'>
            <Image src={AboutImage} width={780} height={900} />
        </div>
    </AboutHomeContainer>
  )
}

export default AboutHome