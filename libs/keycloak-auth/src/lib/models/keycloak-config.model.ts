import {InjectionToken} from '@angular/core';

export interface KeycloakConfig {
  url: string;
  realm: string;
  clientId: string;
  loginRedirectUri: string;
  logoutRedirectUri: string;
  scope?: string;
  tokenValidity: number;
}

export const KeycloakConfigToken = new InjectionToken<KeycloakConfig>('KeycloakConfig');
