import {TestBed} from '@angular/core/testing';
import {KeycloakAuthService} from './keycloak-auth.service';
import {KeycloakConfigToken} from "../models/keycloak-config.model";
import {firstValueFrom, of} from "rxjs";
import {MOCK_KEYCLOAK_CONFIG} from "../../test-mocks";

describe('KeycloakAuthService', () => {
  let service: KeycloakAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: KeycloakConfigToken,
        useValue: MOCK_KEYCLOAK_CONFIG
      }]
    });
    service = TestBed.inject(KeycloakAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call init method on keycloak', () => {
    service['keycloak'].init = jest.fn().mockImplementation(() => of(''));
    const keycloakSpy = jest.spyOn(service['keycloak'], 'init');
    service.initKeycloak();
    expect(keycloakSpy).toBeCalled();
  });

  it('should init keycloak', async () => {
    service['keycloak'].init = jest.fn().mockImplementation(() => of(''));
    const init = await firstValueFrom(service.initKeycloak());
    expect(init).toBe(true);
  });

  it('should login keycloak', async () => {
    service['keycloak'].login = jest.fn().mockImplementation(() => of(''));
    await firstValueFrom(service.login());
  });

  it('should not login keycloak', async () => {
    service['keycloak'].login = jest.fn().mockImplementation(async () => {
      await Promise.reject('LoginError');
    });
    const login = firstValueFrom(service.login());
    await expect(login).rejects.toEqual('LoginError');
  });

  it('should logout keycloak', async () => {
    const clearAccessTokenSpy = jest.spyOn(service, 'clearAccessToken');
    service['keycloak'].logout = jest.fn().mockImplementation(() => of(''));
    await firstValueFrom(service.logout());
    expect(clearAccessTokenSpy).toBeCalled();
  });

  it('should not logout keycloak', async () => {
    const clearAccessTokenSpy = jest.spyOn(service, 'clearAccessToken');
    service['keycloak'].logout = jest.fn().mockImplementation(async () => {
      await Promise.reject('LogoutError');
    });
    const logout = firstValueFrom(service.logout());
    await expect(logout).rejects.toEqual('LogoutError');
    //FIXME: should not be called actually
    expect(clearAccessTokenSpy).toBeCalled();
  });

  it('should update token', async () => {
    service['keycloak'].updateToken = jest.fn().mockImplementation(() => of(''));
    const updateToken = await firstValueFrom(service.updateToken());
    expect(updateToken).toBe(true);
  });

  it('should not update token', async () => {
    service['keycloak'].updateToken = jest.fn().mockImplementation(async () => {
      await Promise.reject();
    });
    const updateToken = await firstValueFrom(service.updateToken());
    expect(updateToken).toBe(false);
  });

});
