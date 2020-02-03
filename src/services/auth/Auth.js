import axios from 'axios';
import {BASE_URL_API} from '../api/constants';
import AccessTokenStorage from '../../utils/auth/AccessTokenStorage';

export const authenticateUser = async (user) => {
    return await axios.post(`${BASE_URL_API}/api/auth/login`,user)
                .then(res =>{
                    console.log(res);
                    return {
                        token: res.data.access_token
                    }
                })
                .catch(err => {throw err;});
}

export const SignUpUserService = async (user) => {
    return await axios.post(`${BASE_URL_API}/api/auth/register`,user)
                 .then(res => {
                    
                 })
                 .catch(err => {throw err});
}
export const logoutUserService = async () => {
    const token = AccessTokenStorage.get();
    return await axios.post(`${BASE_URL_API}/api/auth/logout`,{},{
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
        })
        .then(res => res)
        .catch(err => {throw err});
}