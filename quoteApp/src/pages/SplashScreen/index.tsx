import React from 'react';
import { Title, Container, Logo } from './styles';

const LogoImg = require('../../../assets/logo.png');

export function SplashScreen(){
  return(
    <Container>
      <Logo source={LogoImg}/>
      <Title>Quotes</Title>
    </Container>
  )
}