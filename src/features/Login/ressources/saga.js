import {call , put, takeLatest} from 'redux-saga/effects';
import { authenticateUser } from '../../../services/auth/Auth';
import { LOGIN_USER} from './action-type';
import { loginUserSuccefull, loginUserFailed } from './actions';
import {isNetworkError} from '../../../utils/catchNetworkError';
import AccesTokenStorage from '../../../utils/auth/AccessTokenStorage';

function* AuthenticatingUser(values){
    try {
        const {login,password, history} = values.payload
        const token = yield call(authenticateUser,{login,password});
        yield AccesTokenStorage.set(token.token);
        yield put(loginUserSuccefull());
        yield call(forwardTo,history,'/'); 
    }catch(e){
        if(isNetworkError(e)){
            alert("Network error")
            yield put(loginUserFailed("Error internal"));
        }
        else {
            if(e.response.status === 401)
                yield put(loginUserFailed("Le Login ou le mot de passe ne correspond à aucun compte."));
        }
        console.log(e.isAxiosError);
    }
}

export function* watchAuthenticate(){
    yield takeLatest(LOGIN_USER,AuthenticatingUser)
}
function forwardTo(history,to){
    history.push(to);
}

