import styled from "styled-components";
import { Carousel } from 'antd';
import { ReactComponent as LeftArrow } from "../../../assets/icons/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../../assets/icons/rightArrow.svg";

const Wrapper =styled.div`
    position: relative;
    height: 571px;
` 

const Container =styled(Carousel)`
    width: 100%;
`
const Img =styled.img`
    width: 100%;
    height: 571px;
`
const Icon =styled.div``


Icon.Left =styled(LeftArrow)`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
background: black;
border-radius: 50%;
opacity: 0.5;
top: 50%;
left: 0px;
width: 45px;
height: 45px;
transform: translate(100%,-100% );
z-index: 999;
cursor: pointer;
:hover{
    opacity: 0.97;
}
`


Icon.Right=styled(RightArrow)`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
background: black;
opacity: 0.5;
border-radius: 50%;
z-index: 999;
cursor: pointer;
top: 50%;
right: 0px;
width: 45px;
height: 45px;
transform: translate(-100%,-100% );
:hover{
    opacity: 0.97;
}
`



export {Container,Img,Icon,Wrapper} 