export function updateProfileRequest(data){
  return{
    type: '@user/UPDATA_PROFILE_REQUEST',
    payload: { data },
  };
}
export function updateProfileSucess(profile){
  return{
    type: '@user/UPDATA_PROFILE_SUCESS',
    payload: { profile },
  };
}
export function updateProfileFailure(){
  return{
    type: '@user/UPDATA_PROFILE_FAILURE',
  };
}
