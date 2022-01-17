import {useCallback, useContext, useEffect, useState} from "react";
import {Outlet} from 'react-router-dom';
import {KeycloakContext} from "../KeycloakContext/KeycloakContext";
import {isAuthFunc, loginFunc} from "./RequireAuth.lib";

const RequireAuth = () => {

  const [auth, setAuth] = useState(false);
  const {keycloak} = useContext(KeycloakContext);

  const isAuthenticated = useCallback(isAuthFunc, []);
  const login = useCallback(loginFunc, []);

  useEffect(() => {
    if (!sessionStorage.getItem('accessToken') || !isAuthenticated()) {
      login(keycloak);
    } else {
      setAuth(true);
    }
  }, []);

  if (auth) {
    return (<Outlet/>);
  } else {
    return (<>Still loading...</>);
  }
}

export default RequireAuth;
