import { GET_ALL_PRODUCTS, PUT_ALL_PRODUCTS, ADD_TO_BASKET, PUT_TO_BASKET } from "./action-type";
const INITIAL_STATE = {
    products: [],
    isLoading: false,
    totalRows: 0,
    numberOfPage: 0,
    itemsInBasket: []

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {...state, isLoading: true};
        case PUT_ALL_PRODUCTS:
            return {...state,products: [...action.payload.data], isLoading: false, totalRows: action.payload.total,numberOfPage:action.payload.last_page}
        case ADD_TO_BASKET:
            return {...state,isLoading: true}
        case PUT_TO_BASKET:
             const product = [...state.products.filter(product => product.id === action.payload)];
            return {...state,isLoading: false, itemsInBasket: [...state.itemsInBasket,...product]}
        default:
            return state;
            
    }
}