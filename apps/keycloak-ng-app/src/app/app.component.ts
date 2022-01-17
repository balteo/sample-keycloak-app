import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {KeycloakAuthService} from "@keycloak-auth/services/keycloak-auth.service";

@Component({
  selector: 'ng-keycloak-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sample-keycloak-client';


  constructor(router: Router, authService: KeycloakAuthService) {
    authService.initKeycloak()
      .pipe(tap(() => router.initialNavigation()))
      .subscribe();
  }
}
