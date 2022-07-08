import styled from "styled-components";
import { ReactComponent as homeInput } from "../../assets/icons/homeInput.svg";
import { ReactComponent as  Odvanced} from "../../assets/icons/advanced.svg";
import { ReactComponent as Lupa } from "../../assets/icons/lupa.svg";

const Container =styled.div`
    display: flex;
    justify-content: center;
`
const Icon =styled.div`
`

const LogoInput=styled(homeInput)`
    margin-top:3px ;
    margin-right:20px;
`
Icon.AdvancedSetting=styled(Odvanced)`
    margin-right: 5px;
`
Icon.Search=styled(Lupa)`
    margin-right: 5px;
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
const Advanced=styled.div`
    width: fit-content;
    height:fit-content;
`
Advanced.Title=styled.h2`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
`
Advanced.Input=styled.div`
    display: flex;
    margin-bottom: 20px;
`








export {Container,Form ,LogoInput,Icon,Advanced}
