import { encryptPassword, updateUserDetailsToLocalStorage } from "../../helpers/helperFunctions";
import { SAVE_USER_CRED, UPDATE_USER_PASSWORD, UPDATE_USER_PROFILE } from "../actionTypes";
import { success } from "../dispatchFunctions";

export const saveUserCred = (userDetails) => {
  return (dispatch) => {
    dispatch(success(SAVE_USER_CRED, userDetails));
    updateUserDetailsToLocalStorage(userDetails);
  };
};

export const updateUserProfile = (userDetails) => {
  return (dispatch) => {
    dispatch(success(UPDATE_USER_PROFILE, userDetails));
    updateUserDetailsToLocalStorage(userDetails);
  };
};

export const updateUserPassword = (userDetails) => {
  return (dispatch) => {
    dispatch(success(UPDATE_USER_PASSWORD, userDetails));
    updateUserDetailsToLocalStorage(userDetails);
  };
};