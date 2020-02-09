import { call, put, takeLatest } from "redux-saga/effects";
import {
  authenticateUser,
  logoutUserService
} from "../../../services/auth/Auth";
import { LOGIN_USER, LOGOUT_USER } from "./action-type";
import {
  loginUserSuccefull,
  loginUserFailed,
  logoutUserFailed,
  logoutUserSuccesFull
} from "./actions";
import { isNetworkError } from "../../../utils/catchNetworkError";
import AccesTokenStorage from "../../../utils/auth/AccessTokenStorage";
import customHistory from "../../../utils/history";

function* AuthenticatingUser(values) {
  try {
    const token = yield call(authenticateUser, values.payload);
    yield AccesTokenStorage.set(token.token);
    yield put(loginUserSuccefull());
    yield customHistory.push("/");
  } catch (e) {
    if (isNetworkError(e)) {
      alert("Network error");
      yield put(loginUserFailed("Error internal"));
    } else {
      if (e.response.status === 401)
        yield put(
          loginUserFailed(
            "Le Login ou le mot de passe ne correspond à aucun compte."
          )
        );
    }
    console.log(e.isAxiosError);
  }
}

export function* watchAuthenticate() {
  yield takeLatest(LOGIN_USER, AuthenticatingUser);
}

function* logoutUserSaga(values) {
  try {
    console.log("saga");
    console.log(values);
    yield call(logoutUserService);
    AccesTokenStorage.clear();
    yield put(logoutUserSuccesFull());
    yield customHistory.push("/login");
  } catch (e) {
    console.log("leeeeeeee", e);
    // if(isNetworkError(e)){
    //     alert("Network error")
    //     yield put(logoutUserFailed("Error internal"));
    // }
    // else {
    //     if(e.response.status === 401){
    //         yield put(logoutUserFailed("You canno't logout"));
    //         alert("You canno't logout")
    //     }
    // }
  }
}

export function* watchLogout() {
  yield takeLatest(LOGOUT_USER, logoutUserSaga);
}
