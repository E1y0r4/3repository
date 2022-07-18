import React from 'react'
import { Container,Img, InfoSection,Details } from './style'
import not from '../../assets/imgs/not_available.png'
import user  from '../../assets/imgs/user.png'


const Card = (info) => {
  return (
    <Container>
        <Img src={info?.img || not }/>
        <InfoSection>
            <h1 className='subTitle'>New Apartment Nice Wiew</h1>
            <p className='smallDescription'>Quincy St, Brooklyn, NY, USA</p>
            <Details></Details>
            
        </InfoSection>
    </Container>
  )
}

export default Card