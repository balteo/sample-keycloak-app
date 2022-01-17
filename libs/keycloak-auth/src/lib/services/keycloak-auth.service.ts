import {Inject, Injectable} from '@angular/core';
import * as Keycloak from "keycloak-js";
import {catchError, from, mapTo, Observable, of} from "rxjs";
import {KeycloakConfig, KeycloakConfigToken} from "../models/keycloak-config.model";

@Injectable({
  providedIn: 'root'
})
export class KeycloakAuthService {

  constructor(@Inject(KeycloakConfigToken) private config: KeycloakConfig) {
  }

  private keycloak = Keycloak({
    url: this.config.url,
    realm: this.config.realm,
    clientId: this.config.clientId
  });

  initKeycloak(): Observable<boolean> {
    const keyCloakInit = this.keycloak.init({
      checkLoginIframe: false,
      onLoad: 'check-sso'
    });

    this.keycloak.onAuthSuccess = () => {
      this.saveAccessToken();
    }

    return from(keyCloakInit).pipe(
      mapTo(true),
      catchError(() => of(false))
    );
  }

  login(): Observable<unknown> {
    const keycloakLogin = this.keycloak.login({
      redirectUri: this.config.loginRedirectUri
    });

    return from(keycloakLogin);
  }

  logout(): Observable<unknown> {
    const keycloakLogout = this.keycloak.logout({
      redirectUri: this.config.logoutRedirectUri
    });

    this.clearAccessToken();

    return from(keycloakLogout);
  }

  isAuthenticated(): boolean {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const expiresAt = JSON.parse(sessionStorage.getItem('expiresAt'));
    const time = Math.round(new Date().getTime() / 1000);
    return time < expiresAt;
  }

  updateToken(): Observable<boolean> {
    const updateToken = this.keycloak.updateToken(this.config.tokenValidity);

    return from(updateToken)
      .pipe(
        mapTo(true),
        catchError(() => of(false)),
      );
  }

  getAccessToken() {
    return sessionStorage.getItem('accessToken');
  }

  saveAccessToken() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sessionStorage.setItem('expiresAt', this.keycloak.tokenParsed.exp);
    sessionStorage.setItem('accessToken', this.keycloak.token);
  }

  clearAccessToken() {
    sessionStorage.removeItem('expiresAt');
    sessionStorage.removeItem('accessToken');
  }

  getParsedAccessToken() {
    return this.keycloak?.tokenParsed;
  }
}
