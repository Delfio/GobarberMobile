import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
}

export default function user (state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type){
      case '@auth/SIGN_IN_SUCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@user/UPDATA_PROFILE_SUCESS': {
        console.tron.log("Update foi enviado - ", action.payload.profile);
        draft.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
