import styled from "styled-components";
import {NavLink} from 'react-router-dom'

const Container =styled.div``
const Header =styled.header`
    width: 100%;
    background-color: var(--primaryColor);
    display: flex;
    justify-content: center;
    align-items: center;
`
const Nav =styled.nav`
display: flex;
flex: 1;
align-items: center;
justify-content: center;

`
const Wrapper=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 64px;
max-width: 1180px;
padding: 0px 20px;
font-style: normal;
font-size: 16px;
font-weight: 400;
line-height: 24px;
width: 100%;
color: #ffffff;
border: 1px solid red;
`
const Link =styled(NavLink)`
font-style: normal;
font-weight: 400;
font-size: 16px;
margin: 0 32px;
line-height: 24px;
color: #FFFFFF;
text-decoration: none;
/* padding-left: 70px;  */
:active{
    color: aqua;
}
`
const Span =styled.span`
border: 1px solid white;
border-radius: 2px;
padding: 10px 30px;
cursor: pointer;
`


export{Container,Header,Nav,Link,Wrapper,Span}