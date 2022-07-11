import styled from "styled-components";
import { Carousel } from 'antd';
import { ReactComponent as LeftArrow } from "../../../assets/icons/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../../assets/icons/rightArrow.svg";


const Container =styled(Carousel)`
    width: 100%;
    height: 571px;
    
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
top: 50%;
left: 0px;
transform: translate(100%,-50% );
`


Icon.Right=styled(RightArrow)`

`



export {Container,Img,Icon} 