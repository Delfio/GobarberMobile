import { Alert } from 'react-native';
import { takeLatest, call, put ,all } from 'redux-saga/effects';
import api from '../../../services/api';

import { updateProfileSucess, updateProfileFailure } from './actions'

export function* updataPorfile({payload}){
  try{

    const {name, email, avatar_id, ...rest} = payload.data;

    const profile = Object.assign(
      { name, email, avatar_id },
      rest.oldPassword ? rest : {}
    );
    const response = yield call(api.put, 'users', profile);
    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso' )

    yield put(updateProfileSucess(response.data));

  }catch(err){
    Alert.alert('Falha na atualização', 'Houve um erro na atualização do perfil, verifique seus dados!' )


    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@user/UPDATA_PROFILE_REQUEST', updataPorfile)
]);
