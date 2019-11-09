import React, {useRef} from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png'

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignText,
} from './styles';

import Background from '../../components/Background';

export default function SignUp({ navigation }) {
  const emailRef = useRef();
  const senhaRef = useRef();

  function handleSubmit(){

  };

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form >
        <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome Completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => senhaRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha"
            ref={senhaRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={() =>{}}>
            Acessar
          </SubmitButton>
        </Form>

        <SignLink onPress={() =>{  navigation.navigate('SignIn') }}>
          <SignText> Já possuo uma conta </SignText>
        </SignLink>
      </Container>
    </Background>
  );
}
