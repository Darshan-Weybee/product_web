import CryptoJS from "crypto-js";
import { AUTH_LOCAL_STORAGE_KEY } from "./constants";

export function getSearchQueryString(searchObj) {
    let queryString = [];
    for (const data of Object.entries(searchObj)) {
      queryString.push(data.join("="));
    }
    return queryString.join("&");
  }

export const encryptPassword = (password) => {
    return CryptoJS.AES.encrypt(password, process.env.REACT_APP_PASS_KEY).toString();
};

export const decryptPassword = (encryptedPassword) => {
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, process.env.REACT_APP_PASS_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
};

export const updateUserDetailsToLocalStorage = (userDetails) => {
  console.log("call to update")
    userDetails = {...userDetails, Password : encryptPassword(userDetails?.Password)}
    console.log(userDetails, "upadte");
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, JSON.stringify(userDetails))
}

export const getUserDetailsFromLocalStorage = () => {
  const lsValue = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY);

  if(!lsValue?.includes("Email")) return;

  let userDetails = JSON.parse(lsValue);
  userDetails = {...userDetails, Password : decryptPassword(userDetails?.Password)};
  console.log(userDetails, "fromlocal");
  return userDetails
}