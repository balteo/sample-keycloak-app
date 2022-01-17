import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {KeycloakAuthService} from "../services/keycloak-auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: KeycloakAuthService) {
  }

  canActivate(): boolean {
    const isAuthenticated = this.authService.isAuthenticated();
    if (!isAuthenticated) {
      this.authService.login();
    }
    return isAuthenticated;
  }

}
