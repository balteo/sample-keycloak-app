import {Component, OnInit} from '@angular/core';
import {KeycloakTokenParsed} from "keycloak-js";
import {KeycloakAuthService} from "@keycloak-auth/services/keycloak-auth.service";

@Component({
  selector: 'ng-keycloak-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  parsedAccessToken: KeycloakTokenParsed;

  constructor(private authService: KeycloakAuthService) {
  }

  ngOnInit(): void {
    this.parsedAccessToken = this.authService.getParsedAccessToken();
  }

  logout() {
    this.authService.logout().subscribe(console.log);
  }

}
