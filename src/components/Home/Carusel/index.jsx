import React, { useRef } from 'react'
import {Container,Img,Icon, Wrapper}  from './style'
import home1 from '../../../assets/imgs/home_1.png'
import home2 from '../../../assets/imgs/home_2.png'




const Carousel = () => {
  const slider =useRef('click')
  return (
    <Wrapper>
    <Icon.Left onClick={()=>slider.current.prev()}/>
    <Icon.Right onClick={()=>slider.current.next()}/>

    <Container autoplay ref={slider}>
        <Img src={home1} alt="home" />
        <Img src={home2} alt="home" />
        <Img src={home1} alt="home" />
        <Img src={home2} alt="home" />
        
    </Container>
    </Wrapper>
    
  )
}

export default Carousel