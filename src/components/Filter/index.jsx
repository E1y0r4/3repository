import React from 'react'
import Input from '../Generic/Input'
import { Container, Form, LogoInput,Icon,Advanced } from './style'
import Button from '../Generic/Button'
import {  Popover } from 'antd';

const Filter = () => {
  const adsearch=<Advanced>
      <Advanced.Title>address</Advanced.Title>
      <Advanced.Input>
          <Input width={'200px'} mr={'20'} placeholder='Country'/>
          <Input width={'200px'} mr={'20'} placeholder='Region'/>
          <Input width={'200px'} mr={'20'} placeholder='City'/>
          <Input width={'200px'} placeholder={'Zip code'}/>
      </Advanced.Input>
      <Advanced.Title>apartment info</Advanced.Title>
      <Advanced.Input>
          <Input width={'200px'} mr={'20'} placeholder='Rooms'/>
          <Input width={'200px'} mr={'20'} placeholder='Size'/>
          <Input width={'200px'} placeholder='Sort'/>
      </Advanced.Input>
      <Advanced.Title>price</Advanced.Title>
      <Advanced.Input>
          <Input width={'200px'} mr={'20'} placeholder='Min price'/>
          <Input width={'200px'} placeholder='Max price'/>
      </Advanced.Input>
      
  </Advanced>
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