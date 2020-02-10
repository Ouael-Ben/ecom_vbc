import axios from "../../config/axios";

export const authenticateUser = async user => {
  return await axios
    .post(`/auth/login`, user)
    .then(res => {
      console.log(res);
      return {
        token: res.data.access_token
      };
    })
    .catch(err => {
      throw err;
    });
};

export const SignUpUserService = async user => {
  return await axios
    .post(`/auth/register`, user)
    .then(res => {})
    .catch(err => {
      throw err;
    });
};
export const logoutUserService = async () => {
  return await axios
    .post(`/auth/logout`)
    .then(res => res)
    .catch(err => {
      throw err;
    });
};
