import {
  LOGIN_USER,
  LOGIN_SUCCEFULL,
  LOGIN_FAILED,
  SET_USER_IN_STORE,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESFULL,
  LOGOUT_USER_FAILED
} from "./action-type";

export const loginUser = user => {
  console.log("inside action ", user);
  return {
    type: LOGIN_USER,
    payload: user
  };
};
export const loginUserSuccefull = () => {
  return {
    type: LOGIN_SUCCEFULL
  };
};
export const loginUserFailed = error => {
  return {
    type: LOGIN_FAILED,
    payload: error
  };
};
export const logoutUser = history => {
  console.log(history);
  return {
    type: LOGOUT_USER,
    payload: { history }
  };
};
export const logoutUserSuccesFull = () => {
  return {
    type: LOGOUT_USER_SUCCESFULL
  };
};

export const logoutUserFailed = error => {
  return {
    type: LOGOUT_USER_FAILED,
    payload: error
  };
};
export const setUserInStore = () => {
  return {
    type: SET_USER_IN_STORE
  };
};
