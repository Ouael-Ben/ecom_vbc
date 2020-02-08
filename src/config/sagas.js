import { all, fork } from "redux-saga/effects";
import * as LoginSaga from "../features/Login/ressources/saga";
import * as RegisterSaga from "../features/Register/ressources/saga";
import * as ProductSaga from "../features/Product/ressources/saga";
import * as OrderSaga from "../features/Order/ressources/saga";
export default function* rootSaga() {
  yield all(
    [...Object.values(LoginSaga),
       ...Object.values(RegisterSaga),
       ...Object.values(ProductSaga),
      ...Object.values(OrderSaga)]
    .map(fork)
  );
}
