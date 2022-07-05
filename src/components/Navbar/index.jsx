/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { navbar } from '../../utils/navbar'
import { Container,Header,Nav,Wrapper, } from './style'
import {Link} from 'react-router-dom'
import Button from '../Generic/Button/index'
const Navbar = () => {
  return (
    <Container>
      <Header>
        <Wrapper>
          <Link to={'/home'} style={{display:'flex',alignItems:'center',textDecoration:'none'}}>
            <Nav.Logo/>
        <Nav.title>Houzing</Nav.title>
          </Link>
        <Nav>{navbar.map(({title, path, id})=>{
          return(
            <Nav.Link key={id} to={path}>{title}</Nav.Link> 
            )
          })}</Nav>
              <Button type={'default'} width={'120px'}>Login</Button>
          </Wrapper>
      </Header>
    </Container>
  )
}

export default Navbar