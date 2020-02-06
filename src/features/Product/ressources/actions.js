import { GET_ALL_PRODUCTS, PUT_ALL_PRODUCTS, ADD_TO_BASKET, PUT_TO_BASKET, GET_ALL_BASKET, PUT_ALL_BASKET } from "./action-type";

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

export const addToBasket = (idProduct) => {
    return {
        type: ADD_TO_BASKET,
        payload: idProduct
    }
} 
export const putToBasket = (idProduct) => {
    return {
        type: PUT_TO_BASKET,
        payload : idProduct
    }
}
export const getAllBasket = () => {
    return {
        type: GET_ALL_BASKET,
    }
}
export const putAllProductBasket = (values) => {
    return {
        type: PUT_ALL_BASKET,
        payload: values
    }
}