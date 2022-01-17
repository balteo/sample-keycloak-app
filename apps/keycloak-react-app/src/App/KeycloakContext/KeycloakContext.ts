import {createContext} from "react";

export const KeycloakContext = createContext<{ keycloak: any, tokenParsed: any, setTokenParsed: any }>({
  keycloak: null,
  tokenParsed: null,
  setTokenParsed: null
});
