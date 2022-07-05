import styled from "styled-components";
import {NavLink} from 'react-router-dom'
import { ReactComponent as NavLogo } from "../../assets/icons/logoNav.svg";

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
.active{
        color: aqua;
        
    }

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

    

`
Nav.Logo =styled(NavLogo)`

`;
Nav.title=styled.span`
    color: white;
    display: inline-block;
    margin-left: 10px;
    font-weight: 600;
    font-size: 20px;
`

Nav.Link=styled(NavLink)`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    margin: 0 32px;
    line-height: 24px;
    color: #FFFFFF;
    text-decoration: none;
    :active{
        transform: scale(0.98);
        opacity: 0.7;
    }
`



export{Container,Header,Nav,Wrapper}