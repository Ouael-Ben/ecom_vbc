import { call, put, takeLatest } from "redux-saga/effects";
import { isNetworkError } from "../../../utils/catchNetworkError";
import { putAllOrders } from "./actions";
import { GET_ALL_ORDERS } from "./action-type";
import { getAllOrdersService } from "../../../services/products/productService";

function* getAllOrdersWorker() {
  try {
    const orders = yield call(getAllOrdersService);
    yield put(putAllOrders(orders));
  } catch (e) {
    if (isNetworkError(e)) {
    }
  }
}

export function* watchGetAllProducts() {
  yield takeLatest(GET_ALL_ORDERS, getAllOrdersWorker);
}
