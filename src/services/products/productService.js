import axios from 'axios';
import {BASE_URL_API} from '../api/constants';
import AccessTokenStorage from '../../utils/auth/AccessTokenStorage';

export const getAllProductsService = async (page) => {
    const token = AccessTokenStorage.get();
    return await axios.get(`${BASE_URL_API}/api/products?page=${page}`,{},{
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
        })
        .then(res => {
          return { data: [...res.data.data],
                    total: res.data.total,
                    last_page: res.data.last_page}} )
        .catch(err => {throw err});

}

export const addToBasketService = async (id) => {
  const token = AccessTokenStorage.get();
  return await axios.post(`${BASE_URL_API}/api/products/addToBasket`,{idProduct: id},{
    headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    })
    .then(res => res)
    .catch(err => {throw err});
}