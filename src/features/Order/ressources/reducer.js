import { GET_ALL_ORDERS, PUT_ALL_ORDERS } from "./action-type";

const INITIAL_STATE = {
  orders: [],
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return { ...state, isLoading: true };
    case PUT_ALL_ORDERS:
      return { ...state, orders: [...action.payload], isLoading: false };

    default:
      return state;
  }
};
