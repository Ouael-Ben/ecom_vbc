import { GET_ALL_PRODUCTS, PUT_ALL_PRODUCTS } from "./action-type";
const INITIAL_STATE = {
    products: [],
    isLoading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {...state, isLoading: true};
        case PUT_ALL_PRODUCTS:
            return {...state,products: [...action.payload], isLoading: false}
        default:
            return state;
            
    }
}