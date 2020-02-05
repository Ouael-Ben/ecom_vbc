import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import AuthUtils from '../../utils/auth/isAuth';
import {useDispatch} from 'react-redux';
import { setUserInStore } from '../../features/Login/ressources/actions';


const authenticated = (WrappedComponent) => ({...props})=> {
   
    const history = useHistory();
    const dispatch = useDispatch();

    const isAuth = AuthUtils.isAuth();

    useEffect(()=> {
        if(!isAuth){
            history.push('/login');
        }else {
            dispatch(setUserInStore());
        }

    })

    if(isAuth){
        return <WrappedComponent {...props} />
    }
    return null;
}

export default authenticated;
