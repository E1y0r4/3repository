import React from 'react'
import { Container } from './style'

const Button = (
    {width,
    height,
    type,
    mt,
    mb,
    ml,
    mr,
    onClick,
    children}
) => {
  return (
    <Container
    width={width}
    height={height}
    type={type}
    mt={mt}
    mb={mb}
    ml={ml}
    mr={mr}
    onClick={onClick}
    >
      {children}
    </Container>
  );
}; 

export default Button