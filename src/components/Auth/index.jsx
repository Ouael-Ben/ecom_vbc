import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthUtils from "../../utils/auth/isAuth";
import { setUserInStore } from "../../features/Login/ressources/actions";

export default function Auth({ children }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const isAuth = AuthUtils.isAuth();

  useEffect(() => {
    if (!isAuth) {
      history.push("/login");
    } else {
      dispatch(setUserInStore());
    }
  }, []);
  const { authenticated } = useSelector(state => state.Login);

  return <>{authenticated && children}</>;
}
