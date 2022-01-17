import RequireAuth from "./RequireAuth";
import React from "react";
import * as lib from './RequireAuth.lib';
import {render} from "@testing-library/react";
import {KeycloakContext} from "../KeycloakContext/KeycloakContext";

describe('RequireAuth', () => {

  it('should render successfully', () => {
    jest.spyOn(lib, 'isAuthFunc').mockReturnValue(true);
    jest.spyOn(sessionStorage, 'getItem').mockReturnValue('something');

    const {baseElement} = render(<RequireAuth/>);
    expect(baseElement).toBeTruthy();
  });

  it('should call login', () => {
    jest.spyOn(lib, 'isAuthFunc').mockReturnValue(false);
    jest.spyOn(sessionStorage, 'getItem').mockReturnValue(null);

    const keycloak = {login: jest.fn()};
    const tokenParsed = {};
    const setTokenParsed = jest.fn();

    const {baseElement} = render(
      <KeycloakContext.Provider value={{keycloak, tokenParsed, setTokenParsed}}>
        <RequireAuth/>
      </KeycloakContext.Provider>
    );
    expect(baseElement).toBeTruthy();
    expect(keycloak.login).toHaveBeenCalled();
  });
});
