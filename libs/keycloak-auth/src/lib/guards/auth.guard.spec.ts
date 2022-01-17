import {TestBed} from '@angular/core/testing';
import {AuthGuard} from './auth.guard';
import {KeycloakAuthService} from "../services/keycloak-auth.service";
import {KeycloakConfigToken} from "../models/keycloak-config.model";
import {MOCK_KEYCLOAK_CONFIG} from "../../test-mocks";

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: KeycloakConfigToken,
          useValue: MOCK_KEYCLOAK_CONFIG
        },
        KeycloakAuthService
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should activate', () => {
    const loginSpy = jest.spyOn(guard['authService'], 'login');
    guard['authService'].isAuthenticated = jest.fn().mockImplementation(() => true);
    const canActivate = guard.canActivate();
    expect(canActivate).toBe(true);
    expect(loginSpy).not.toBeCalled();
  });

  it('should not activate', async () => {
    const loginSpy = jest.spyOn(guard['authService'], 'login');
    guard['authService']['keycloak'].login = jest.fn().mockImplementation(() => Promise.resolve());
    guard['authService'].isAuthenticated = jest.fn().mockImplementation(() => false);
    const canActivate = guard.canActivate();
    expect(canActivate).toBe(false);
    expect(loginSpy).toBeCalled();
  });

});
