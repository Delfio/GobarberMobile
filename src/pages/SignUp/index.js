import React, {useRef, useState} from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

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

import { signUpRequest } from '../../store/modules/auth/actions'

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const senhaRef = useRef();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [passowrd, setPassowrd] = useState();

  const loading = useSelector(state => state.auth.loading)


  function handleSubmit(){
    dispatch(signUpRequest(name, email, passowrd))
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
            value={name}
            onChangeText={setName}
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
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha"
            ref={senhaRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={passowrd}
            onChangeText={setPassowrd}
          />

          <SubmitButton onPress={handleSubmit}>
            Cadastrar
          </SubmitButton>
        </Form>

        <SignLink loading={loading} onPress={() =>{  navigation.navigate('SignIn') }}>
          <SignText> Já possuo uma conta </SignText>
        </SignLink>
      </Container>
    </Background>
  );
}
