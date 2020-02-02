import {LOGIN_USER,LOGIN_SUCCEFULL, LOGIN_FAILED, SET_USER_IN_STORE} from './action-type';
import AccessTokenStorage from '../../../utils/auth/AccessTokenStorage';
import decode from 'jwt-decode';
import _ from 'lodash';

const initialState = {
    isLoading: false,
    user: {},
    error: '',
    authenticated: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, isLoading: true};
        case LOGIN_SUCCEFULL:
            return {...state,isLoading: false, authenticated:true}
        case LOGIN_FAILED:
            return {...state, isLoading: false, error: action.payload}
        case SET_USER_IN_STORE: 
            if(_.isEmpty(_.get(state,'user'))){
                const token =  AccessTokenStorage.get();

                const parsedToken  = decode(token);
                console.log(parsedToken);
                const {user} =  {...parsedToken};
                return {...state,user: user, authenticated:true}
            }
            return {...state};
            break;
            
        default:
            return state;
            
    }
}