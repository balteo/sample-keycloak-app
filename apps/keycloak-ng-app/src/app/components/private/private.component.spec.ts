import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PrivateComponent} from './private.component';
import {KeycloakAuthService} from "@keycloak-auth/services/keycloak-auth.service";
import {KeycloakConfigToken} from "@keycloak-auth/models/keycloak-config.model";

describe('PrivateComponent', () => {
  let component: PrivateComponent;
  let fixture: ComponentFixture<PrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        KeycloakAuthService, {
          provide: KeycloakConfigToken,
          useValue: 'KeycloakConfig'
        }],
      declarations: [PrivateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
