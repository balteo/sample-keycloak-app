import './Private.module.scss';
import {useCallback, useContext} from "react";
import {KeycloakContext} from "../KeycloakContext/KeycloakContext";
import {logoutFactoryFunc} from "./Private.lib";

/* eslint-disable-next-line */
export interface PrivateProps {
}

export function Private(props: PrivateProps) {

  const {keycloak, tokenParsed} = useContext(KeycloakContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const logout = useCallback(logoutFactoryFunc(keycloak), []);

  return (
    <div>
      <h1>Welcome to Private!</h1>
      <button onClick={logout}>logout</button>

      <br/> <br/>

      {JSON.stringify(tokenParsed)}
    </div>
  );
}

export default Private;
