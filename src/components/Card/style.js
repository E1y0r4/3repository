import styled from "styled-components";

const Container=styled.div`
    background: white;
    border: 1px solid #e6e9ec;
    border-radius: 3px;
    max-width: 380px;
    min-width: 280px;
`
const Img =styled.img`
    width: 100%;
    height: 220px;
`
const InfoSection=styled.section`
    width: 100%;
    padding: 25px;
    border-top: 1px solid #e6e9ec;
`
const Details =styled.div`
    display: flex;
    justify-content: space-evenly;

`
Details.Item=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`



export {Container,Img,InfoSection,Details}