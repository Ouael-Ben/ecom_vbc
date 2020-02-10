import { call, put, takeLatest } from "redux-saga/effects";
import {
  authenticateUser,
  logoutUserService
} from "../../../services/auth/Auth";
import { LOGIN_USER, LOGOUT_USER } from "./action-type";
import { loginUserSuccefull, logoutUserSuccesFull } from "./actions";
import AccesTokenStorage from "../../../utils/auth/AccessTokenStorage";
import customHistory from "../../../utils/history";

function* AuthenticatingUser(values) {
  try {
    const token = yield call(authenticateUser, values.payload);
    yield AccesTokenStorage.set(token.token);
    yield put(loginUserSuccefull());
    yield customHistory.push("/");
  } catch (e) {}
}

export function* watchAuthenticate() {
  yield takeLatest(LOGIN_USER, AuthenticatingUser);
}

function* logoutUserSaga(values) {
  try {
    yield call(logoutUserService);
    AccesTokenStorage.clear();
    yield put(logoutUserSuccesFull());
    yield customHistory.push("/login");
  } catch (e) {}
}

export function* watchLogout() {
  yield takeLatest(LOGOUT_USER, logoutUserSaga);
}
