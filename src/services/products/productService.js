import axios from "../../config/axios";

export const getAllProductsService = async page => {
  return await axios
    .get(`/products?page=${page}`)
    .then(res => {
      return {
        data: [...res.data.data],
        total: res.data.total,
        last_page: res.data.last_page
      };
    })
    .catch(err => {
      throw err;
    });
};

export const addToBasketService = async id => {
  return await axios
    .post(`/products/addCart`, { idProduct: id })
    .then(res => res)
    .catch(err => {
      throw err;
    });
};

export const getAllProductsBasket = async () => {
  return await axios
    .get(`/getListProductsBasket`)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
};

export const removeProductBasketService = async id => {
  return await axios
    .post(`/removeLigneBasket`, { idLigneOrder: id })
    .then(res => res)
    .catch(err => {
      throw err;
    });
};

export const paymentOrderService = async payment => {
  return await axios
    .post(`/paymentOrder`, payment)
    .then(res => res)
    .catch(err => {
      throw err;
    });
};

export const getAllOrdersService = async () => {
  return await axios
    .get(`/getAllOrdersHistorique`)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
};
