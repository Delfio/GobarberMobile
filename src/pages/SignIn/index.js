import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png'

import { Container, Form, FormInput, SubmitButton, SignLink, SignText } from './styles';

import Background from '../../components/Background';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form >
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha"
          />

          <SubmitButton onPress={() =>{}}>
            Acessar
          </SubmitButton>
        </Form>

        <SignLink onPress={() =>{}}>
          <SignText> Criar Conta Gratuita </SignText>
        </SignLink>
      </Container>
    </Background>
  );
}
