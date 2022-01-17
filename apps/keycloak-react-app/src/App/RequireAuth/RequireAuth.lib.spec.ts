import {isAuthFunc, loginFunc} from "./RequireAuth.lib";
import {KeycloakInstance} from "keycloak-js";

describe('RequireAuth lib', () => {

  describe('isAuthFunc', () => {

    //Mock date: Sun Jan 16 2022 18:52:10
    const mockDate = new Date(1642355530568);

    //Mock expiry token: Mon Jan 17 2022 05:58:50
    const mockNonExpiredToken = '1642395530';

    //Mock expiry token: Sun Jan 16 2022 18:40:10
    const mockExpiredToken = '1642354810'

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

    it('should authenticate if token has not expired', () => {
      jest.spyOn(sessionStorage, 'getItem').mockReturnValue(mockNonExpiredToken);
      const isAuth = isAuthFunc();
      expect(isAuth).toBe(true);
    });

    it('should not authenticate if token has expired', () => {
      jest.spyOn(sessionStorage, 'getItem').mockReturnValue(mockExpiredToken);
      const isAuth = isAuthFunc();
      expect(isAuth).toBe(false);
    });
  });

  describe('loginFunc', () => {

    const mockKeycloak = {login: jest.fn()};
    const loginSpy = jest.spyOn(mockKeycloak, 'login');

    it('should login', () => {
      loginFunc(mockKeycloak as unknown as KeycloakInstance);
      expect(loginSpy).toHaveBeenCalled();
    });
  });

});
