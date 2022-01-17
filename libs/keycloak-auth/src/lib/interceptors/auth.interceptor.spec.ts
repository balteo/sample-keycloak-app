import {TestBed} from '@angular/core/testing';
import {AuthInterceptor} from './auth.interceptor';
import {KeycloakAuthService} from "../services/keycloak-auth.service";
import {KeycloakConfigToken} from "../models/keycloak-config.model";
import {MOCK_KEYCLOAK_CONFIG} from "../../test-mocks";

describe('AuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{
      provide: KeycloakConfigToken,
      useValue: MOCK_KEYCLOAK_CONFIG
    },
      KeycloakAuthService,
      AuthInterceptor
    ]
  }));

  it('should be created', () => {
    const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
