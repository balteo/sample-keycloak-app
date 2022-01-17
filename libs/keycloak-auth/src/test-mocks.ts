import {KeycloakConfig} from "./lib/models/keycloak-config.model";

export const MOCK_KEYCLOAK_CONFIG: KeycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'myrealm',
  clientId: 'myclient',
  tokenValidity: 10,
  loginRedirectUri: 'http://localhost:4200/private',
  logoutRedirectUri: 'http://localhost:4200'
}
