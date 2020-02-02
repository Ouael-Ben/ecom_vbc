import { all, fork } from "redux-saga/effects";
import * as LoginSaga from "../features/Login/ressources/saga";
export default function* rootSaga() {
  yield all(
    [...Object.values(LoginSaga)].map(fork)
  );
}
