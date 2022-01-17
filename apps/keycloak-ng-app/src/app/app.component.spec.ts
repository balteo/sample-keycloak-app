import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {KeycloakAuthService} from "@keycloak-auth/services/keycloak-auth.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {of} from "rxjs";
import {RouterTestingModule} from "@angular/router/testing";

describe('AppComponent', () => {

  const authService = {
    initKeycloak: jest.fn().mockImplementation(() => of(true))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        KeycloakAuthService,
        {
          provide: KeycloakAuthService,
          useValue: authService
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sample-keycloak-client'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sample-keycloak-client');
  });

});
