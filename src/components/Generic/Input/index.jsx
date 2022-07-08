import React from 'react'
import { Container,Logo,SearchInput } from './style'

const Input = ({
  width,
  height,
  children,
  mt,
  mb,
  ml,
  mr,
  placeholder,
  onChange,
  pl,
  type
}) => {
  return (
    <Container mt={mt} mb={mb} ml={ml} mr={mr} width={width} height={height}>
      <Logo>
      {children}
      </Logo>
      <SearchInput
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      
      pl={pl}
      />
    </Container>
  )
}

export default Input