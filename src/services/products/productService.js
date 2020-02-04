import axios from 'axios';
import {BASE_URL_API} from '../api/constants';
import AccessTokenStorage from '../../utils/auth/AccessTokenStorage';

export const getAllProductsService = async () => {
    const token = AccessTokenStorage.get();
    return await axios.post(`${BASE_URL_API}/api/posts`,{},{
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
        })
        .then(res => res.data)
        .catch(err => {throw err});

}