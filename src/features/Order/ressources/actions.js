import { PUT_ALL_ORDERS, GET_ALL_ORDERS } from "./action-type";

export const getAllOrders = () => {
  return {
    type: GET_ALL_ORDERS
  };
};
export const putAllOrders = values => {
  return {
    type: PUT_ALL_ORDERS,
    payload: values
  };
};
