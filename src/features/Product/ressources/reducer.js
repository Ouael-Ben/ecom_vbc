import { GET_ALL_PRODUCTS, PUT_ALL_PRODUCTS, ADD_TO_BASKET, PUT_TO_BASKET, GET_ALL_BASKET, PUT_ALL_BASKET } from "./action-type";
import {sumBy} from 'lodash';

const INITIAL_STATE = {
    products: [],
    isLoading: false,
    totalRows: 0,
    numberOfPage: 0,
    itemsInBasket: [],
    countItemBasket: 0
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
             
            return {...state,isLoading: false, countItemBasket: state.countItemBasket + 1}
        case GET_ALL_BASKET: 
            return {...state,isLoading: true}
        case PUT_ALL_BASKET:
            const countItem = sumBy(action.payload,'quantity');
            return {...state,countItemBasket: countItem, itemsInBasket: [...action.payload], isLoading: false}
        default:
            return state;
            
    }
}