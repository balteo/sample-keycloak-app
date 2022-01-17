import Keycloak from "keycloak-js";

export const initKeycloak = async () => {

  const keycloak = Keycloak({
    url: 'http://localhost:8080/auth',
    realm: 'myrealm',
    clientId: 'myclient'
  });

  await keycloak.init({
    checkLoginIframe: false,
    onLoad: 'check-sso'
  }).then(authenticated => {
    if (authenticated) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      sessionStorage.setItem('accessToken', keycloak.token);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      sessionStorage.setItem('expiresAt', keycloak.tokenParsed.exp);
    }
  });

  return keycloak;
}
