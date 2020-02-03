import {call , put, takeLatest} from 'redux-saga/effects';
import {isNetworkError} from '../../../utils/catchNetworkError';
import { registerUserSuccesfull, registerUserFailed } from "./actions";
import { REGISTER_USER } from "./action-type";
import { SignUpUserService } from "../../../services/auth/Auth";
import { forwardTo } from '../../../utils/history';

function * RegisterUserSaga(values){
    try{
        const {fullName, login, password, confirmPassword, history} = values.payload
        yield call(SignUpUserService,{fullName,login,password,confirmPassword});
        yield put(registerUserSuccesfull());
        yield call(forwardTo,history,'/login'); 
    }catch(e){
        if(isNetworkError(e)){
            yield put(registerUserFailed("Error internal"));
        }
        else {
            if(e.response.status === 400)
            {
                yield put(registerUserFailed("veuillez saisir un password valid ! "));

            }else if(e.response.status === 422){
                yield put(registerUserFailed("veuillez Completer le formulaire ! "));
            }
        }
    }
    

}


export function* watchAuthenticate(){
    yield takeLatest(REGISTER_USER,RegisterUserSaga)
}