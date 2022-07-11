import React from 'react'
import {Container,Img,Icon}  from './style'
import home1 from '../../../assets/imgs/home_1.png'
import home2 from '../../../assets/imgs/home_2.png'
import home4 from '../../../assets/imgs/home_4.png'



const Carousel = () => {
  return (
    <>
    <Icon.Left/>
    <Icon.Right/>

    <Container autoplay>
        <Img src={home1} alt="home" />
        <Img src={home2} alt="home" />
        <Img src={home4} alt='home' />
    </Container>
    </>
    
  )
}

export default Carousel