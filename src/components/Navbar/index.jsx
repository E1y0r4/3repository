import React from 'react'
import { navbar } from '../../utils/navbar'
import { Container,Header,Nav,Wrapper, } from './style'
import {Link,Outlet,useNavigate} from 'react-router-dom'
import Button from '../Generic/Button/index'

const Navbar = () => {
  const navigate = useNavigate()
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
              <Button onClick={()=>navigate('/login')} type={'default'} width={'120px'}>Login</Button>
          </Wrapper>
      </Header>
      <main>
        <Outlet/>
      </main>
    </Container>
  )
}

export default Navbar