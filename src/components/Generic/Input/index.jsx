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
  onClick,
  type
}) => {
  return (
    <Container
    mt={mt}
    mb={mb}
    ml={ml}
    mr={mr}

    >
      <Logo>
      {children}
      </Logo>
      <SearchInput
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      width={width}
      height={height}
      pl={pl}

      />
    </Container>
  )
}

export default Input