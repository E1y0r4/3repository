import React from 'react'
import Input from '../Generic/Input'
import { Container, Form, LogoInput,Icon,Odvanced } from './style'
import Button from '../Generic/Button'
import {  Popover } from 'antd';

const Filter = () => {
  const adsearch=<Odvanced>
      <Odvanced.Title>address</Odvanced.Title>
      <Odvanced.Title>apartment info</Odvanced.Title>
      <Odvanced.Title>price</Odvanced.Title>
  </Odvanced>
  return (
    <Container>
        <Form>
            <Input pl={'36px'} placeholder={'Enter an address, neighborhood, city, or ZIP code'}>
              <LogoInput/>
            </Input>
            <Popover placement='bottomRight' content={adsearch} trigger={'click'} >
            <Button ml={'20'} mr={'20'} width={'150px'} type={'secondary'}>
              <Icon.AdvancedSetting/>Advanced
              </Button>
            </Popover>
            <Button width={'180px'} type={'primary'}>
              <Icon.Search/>Search
              </Button>
        </Form>
    </Container>
  )
}

export default Filter