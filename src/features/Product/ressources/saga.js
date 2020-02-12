import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_ALL_PRODUCTS,
  ADD_TO_BASKET,
  GET_ALL_BASKET,
  REMOVE_PRODUCT_BASKET,
  PAYMENT_ORDER
} from "./action-type";
import {
  getAllProductsService,
  addToBasketService,
  getAllProductsBasket,
  removeProductBasketService,
  paymentOrderService
} from "../../../services/products/productService";
import {
  putAllProducts,
  putToBasket,
  putAllProductBasket,
  getAllBasket
} from "./actions";
import { isNetworkError } from "../../../utils/catchNetworkError";
import customHistory from "../../../utils/history";

function* getAllProductsWorker(values) {
  try {
    const page = values.payload;
    const products = yield call(getAllProductsService, page);
    console.log(products);
    yield put(putAllProducts(products));
  } catch (e) {
    if (isNetworkError(e)) {
    }
  }
}

export function* watchGetAllProducts() {
  yield takeLatest(GET_ALL_PRODUCTS, getAllProductsWorker);
}

function* addToBasketWorker(values) {
  try {
    yield call(addToBasketService, values.payload);
    yield put(putToBasket(values.payload));
  } catch (e) {}
}

export function* watchAddToBasket() {
  yield takeLatest(ADD_TO_BASKET, addToBasketWorker);
}

function* getAllProductBasket() {
  try {
    const products = yield call(getAllProductsBasket);
    yield put(putAllProductBasket(products));
  } catch (e) {}
}

export function* watchGetAllProductBasket() {
  yield takeLatest(GET_ALL_BASKET, getAllProductBasket);
}

function* removeProductBasketWorker(values) {
  try {
    yield call(removeProductBasketService, values.payload);
    yield put(getAllBasket());
  } catch (e) {}
}

export function* watchRemoveProductBasket() {
  yield takeLatest(REMOVE_PRODUCT_BASKET, removeProductBasketWorker);
}

function* paymentOrderWorker(values) {
  try {
    yield call(paymentOrderService, values.payload);
    yield put(getAllBasket());
    yield customHistory.push("/orders");
  } catch (e) {}
}

export function* watchPaymentOrder() {
  yield takeLatest(PAYMENT_ORDER, paymentOrderWorker);
}
