import {
  REGISTER_USER,
  REGISTER_SUCCESFULL,
  REGISTER_FAILED
} from "./action-type";

export const registerUser = payload => {
  return {
    type: REGISTER_USER,
    payload
  };
};
export const registerUserSuccesfull = message => {
  return {
    type: REGISTER_SUCCESFULL,
    payload: message
  };
};
export const registerUserFailed = message => {
  return {
    type: REGISTER_FAILED,
    payload: message
  };
};
