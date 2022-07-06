import React from 'react'
import Input from '../Generic/Input'
import { Container, Form } from './style'
import Button from '../Generic/Button'
const Filter = () => {
  return (
    <Container>
        <Form>
            <Input placeholder={'Enter an address, neighborhood, city, or ZIP code'}></Input>
            <Button ml={'10'} mr={'10'} width={'130px'} type={'secondary'}>Advanced</Button>
            <Button width={'180px'} type={'primary'}>Search</Button>
        </Form>
    </Container>
  )
}

export default Filter