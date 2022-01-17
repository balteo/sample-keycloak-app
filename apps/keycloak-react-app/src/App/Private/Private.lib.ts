import {KeycloakInstance} from "keycloak-js";

export const logoutFactoryFunc = (keycloak: KeycloakInstance) => {
  return async () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('expiresAt');
    await keycloak.logout({redirectUri: 'http://localhost:4200'});
  }
}
