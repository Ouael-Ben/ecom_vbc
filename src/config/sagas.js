import { all, fork } from "redux-saga/effects";
import * as LoginSaga from "../features/Login/ressources/saga";
import * as RegisterSaga from "../features/Register/ressources/saga";
export default function* rootSaga() {
  yield all(
    [...Object.values(LoginSaga), ...Object.values(RegisterSaga)].map(fork)
  );
}
