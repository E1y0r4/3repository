import styled from "styled-components";

const Container =styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    margin-top: ${({mt})=> `${mt}px`};
    margin-bottom: ${({mb})=> `${mb}px`};
    margin-left: ${({ml})=> `${ml}px`};
    margin-right: ${({mr})=> `${mr}px`};
    border: 1px solid #e6e9ec;
    border-radius: 2px;
`
const Logo =styled.span`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 30px;
`
const SearchInput=styled.input`
    display: flex;
    width: ${({width})=>(width?width:'100%')};
    height: ${({height})=> height|| '40px'};
    padding-left: ${({pl})=> pl || '14px'};
    border-radius: 2px;
    outline: none;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #0d263b;
`

export {Container,Logo,SearchInput}