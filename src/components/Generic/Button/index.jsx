import React from 'react'
import { Container } from './style'

const Button = (
    width,
    height,
    type,
    mt,
    mb,
    ml,
    mr,
    OnClick,
    children
) => {
  return (
    <Container
    width={width}
    height={    height}
    type={    type}
    mt={    mt}
    mb={    mb}
    ml={    ml}
    mr={    mr}
    >Button</Container>
  )
}

export default Button