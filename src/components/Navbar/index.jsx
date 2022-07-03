import React from 'react'
import { navbar } from '../../utils/navbar'
import { Container,Header,Nav,Wrapper,Span } from './style'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <Container>
      <Header>
        <Wrapper>
          <Link to={'/home'}>
            <Nav.Logo/>
        <span>logo</span>
          </Link>
        <Nav>{navbar.map(({title, path, id})=>{
          return(
            <Nav.Link key={id} to={path}>{title}</Nav.Link> 
            )
          })}</Nav>
        <Span>Login</Span>
          </Wrapper>
      </Header>
    </Container>
  )
}

export default Navbar