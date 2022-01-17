import {logoutFactoryFunc} from "./Private.lib";
import {KeycloakInstance} from "keycloak-js";

describe('Private lib', () => {

  const mockKeycloak = {logout: jest.fn()};
  const logoutSpy = jest.spyOn(mockKeycloak, 'logout');
  const removeItemSpy = jest.spyOn(sessionStorage, 'removeItem');
  const logoutFunc = logoutFactoryFunc(mockKeycloak as unknown as KeycloakInstance);

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call logout', async () => {
    await logoutFunc();
    expect(logoutSpy).toHaveBeenCalled();
  });

  it('should remove accessToken, expiresAt from session storage', async () => {
    await logoutFunc();
    expect(removeItemSpy).toHaveBeenCalledTimes(2);
    expect(removeItemSpy).toHaveBeenNthCalledWith(1, 'accessToken');
    expect(removeItemSpy).toHaveBeenNthCalledWith(2, 'expiresAt');
  });
});
