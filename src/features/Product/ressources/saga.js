import {call , put, takeLatest} from 'redux-saga/effects';
import { GET_ALL_PRODUCTS, ADD_TO_BASKET } from './action-type';
import { getAllProductsService, addToBasketService } from '../../../services/products/productService';
import { putAllProducts, putToBasket } from './actions';
import { isNetworkError } from '../../../utils/catchNetworkError';


function* getAllProductsWorker(values){
    try{
        const page = values.payload;
        const products = yield call(getAllProductsService,page);
        console.log(products);
        yield put(putAllProducts(products))
    }catch(e){
        if(isNetworkError(e)){
            
        }
    }

}

export function* watchGetAllProducts(){
    yield takeLatest(GET_ALL_PRODUCTS,getAllProductsWorker);
}


function* addToBasketWorker(values){
    try{
        yield call(addToBasketService,values.payload);
        yield put(putToBasket(values.payload));
    }catch(e){

    }
}

export function * watchAddToBasket(){
    yield takeLatest(ADD_TO_BASKET,addToBasketWorker);
}