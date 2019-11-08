import React from 'react';
import { Text } from 'react-native';

// import { Container } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from '../../components/Background';

export default function SignIn() {
  return (
    <Background>
      <Text> Coeeee </Text>

      <Input style={{ marginTop: 30 }} icon="call" placeholder="Digite seu nome" />
      <Button>Entrar</Button>
    </Background>
  );
}
