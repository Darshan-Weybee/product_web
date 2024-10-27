import { SAVE_USER_CRED, UPDATE_USER_PASSWORD, UPDATE_USER_PROFILE } from "../actionTypes";

  const initialState = {
    userData: {}
  };
  
  export const authReducer = (
    state = initialState,
    action
  ) => {
    switch (action.type) {
      case SAVE_USER_CRED:
        return {
          userData : action.payload
        };
      case UPDATE_USER_PROFILE:
        return {
          userData: {...state.userData, FirstName : action.payload.FirstName, LastName : action.payload.LastName}
        };
      case UPDATE_USER_PASSWORD:
        return {
          userData: {...state.userData, Password : action.payload.Password}
        };
      default:
        return state;
    }
  };
  