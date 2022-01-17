import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from "react";
import * as mockInitialization from "./Initialization/Initialization";
import {KeycloakInstance} from "keycloak-js";

describe('App', () => {

  jest.spyOn(mockInitialization, 'initKeycloak').mockResolvedValue({tokenParsed: {}} as KeycloakInstance);

  it('should render successfully', async () => {
    const {baseElement} = render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    );

    await waitFor(() => baseElement);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', async () => {
    const {getByText} = render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    );

    await waitFor(() => getByText(/Hello/gi));
    expect(getByText(/Hello/gi)).toBeTruthy();
  });

  it('should navigate to Page 2', async () => {
    const {getByText} = render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    );


    await waitFor(() => getByText(/Page 2/g));
    fireEvent.click(getByText(/Page 2/g));
    expect(await screen.findByText(/from page 2/)).toBeTruthy();
  });
});
