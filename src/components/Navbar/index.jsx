import React from 'react'
import { navbar } from '../../utils/navbar'
import { Container,Header,Nav,Link,Wrapper,Span } from './style'
// import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <Container>
      <Header>
        <Wrapper>
        <span>logo</span>
        <Nav>{navbar.map(({title, path, id})=>{
          return(
            <Link key={id} to={path}>{title}</Link> 
            )
          })}</Nav>
        <Span>Login</Span>
          </Wrapper>
      </Header>
    </Container>
  )
}

export default Navbar