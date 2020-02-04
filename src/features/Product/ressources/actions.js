import { GET_ALL_PRODUCTS, PUT_ALL_PRODUCTS } from "./action-type";

export const getAllProducts = () => {
    return {
        type: GET_ALL_PRODUCTS
    }
}
export const putAllProducts = (values) => {
    return {
        type: PUT_ALL_PRODUCTS,
        payload : {...values}
    }
}