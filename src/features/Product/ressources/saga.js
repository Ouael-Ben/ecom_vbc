import {call , put, takeLatest} from 'redux-saga/effects';
import { GET_ALL_PRODUCTS } from './action-type';
import { getAllProductsService } from '../../../services/products/productService';
import { putAllProducts } from './actions';
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