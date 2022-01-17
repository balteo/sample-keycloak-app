import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeycloakConfig, KeycloakConfigToken} from "./models/keycloak-config.model";

@NgModule({
  imports: [CommonModule],
})
export class KeycloakAuthModule {

  static forRoot(config: KeycloakConfig): ModuleWithProviders<KeycloakAuthModule> {
    return {
      ngModule: KeycloakAuthModule,
      providers: [
        {
          provide: KeycloakConfigToken,
          useValue: config
        }
      ]
    };
  }
}
