import { GET_ALL_PRODUCTS, PUT_ALL_PRODUCTS } from "./action-type";

export const getAllProducts = (page = 1) => {
    return {
        type: GET_ALL_PRODUCTS,
        payload: page
    }
}
export const putAllProducts = (values) => {
    return {
        type: PUT_ALL_PRODUCTS,
        payload : values
    }
}