import styled from "styled-components";
import { ReactComponent as homeInput } from "../../assets/icons/homeInput.svg";
const Container =styled.div`
    display: flex;
    justify-content: center;
`
const Icon =styled.div`
`
Icon.HomeInput=styled(homeInput)`
margin-top: 4px;
margin-right: 8px;
`

const Form =styled.div`
    display: flex;
    width: 100%;
    max-width: 1180px;
    padding: 10px 20px;
`


export {Container,Form, Icon}