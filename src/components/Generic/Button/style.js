import styled from "styled-components";


const getType=(type)=>{
    switch (type) {
        case 'primary':
            return{background:'#0061df',color:'#ffffff',border:'none'};
            case 'secondary':
                return{border:'1px solid #e6e9ec',color:'#0d263b'};
                case 'default':
                    return{border:'1px solid #e6e9ec',color:'#ffffff',background:'transparent'};
    }
} 

const Container =styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 14px; 
    line-height: 20px;
    width: ${({width})=>(width?width:'auto')};
    height: ${({height})=>(height?height:'44px')};
    margin-top: ${({mt})=> `${mt}px`};
    margin-bottom: ${({mb})=> `${mb}px`};
    margin-left: ${({ml})=> `${ml}px`};
    margin-right: ${({mr})=> `${mr}px`};
    ${({type})=>getType(type)}
    cursor: pointer;
    
    border-radius: 2px;
    :active{
        transform: scale(0.98);
        opacity: 0.7;
    }
`


export{ Container}