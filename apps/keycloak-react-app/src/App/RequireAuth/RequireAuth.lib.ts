import {KeycloakInstance} from "keycloak-js";

export const isAuthFunc = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const expiresAt = JSON.parse(sessionStorage.getItem('expiresAt'));
  const time = Math.round(new Date().getTime() / 1000);
  return time < expiresAt;
}

export const loginFunc = (keycloak: KeycloakInstance) => {
  keycloak.login({
    redirectUri: 'http://localhost:4200/private'
  });
}
