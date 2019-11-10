import { Alert } from 'react-native';
import {  takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { signInSucess, signFailure } from './actions'

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password
    });

    const { token, user } = response.data;

    if(user.provider){
      Alert.alert('Erro no login', 'O usúario não pode ser prestador de serviços' )
      return;
    }

    // api.defaults.headers.Authorization = `Bearer ${token}`; mesma coisa
    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    yield put(signInSucess(token, user));

   // history.push('/dashboard');
  } catch(err){
    Alert.alert('Falha na autenticação', 'Erro no login' )
    yield put(signFailure());
  }
};

export function* signUp ({ payload }) {
  try{
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });
    // history.push('/')

  }catch(err){
    Alert.alert('Erro no cadastro', 'Houve um erro! favor verifique seus dados' )
    yield put(signFailure());
  }
}
export function setToken ({ payload }) {
  const { token } = payload.auth;

  if(!payload) {
    console.log("asdfasdf")
    return
  }

  if(token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

}

export function signOut(){
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
