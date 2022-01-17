import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KeycloakAuthService} from "../services/keycloak-auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: KeycloakAuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.authService.getAccessToken();
    const headers = request.headers.set(
      'Authorization',
      `Bearer ${accessToken}`
    );
    const authReq = request.clone({headers});
    return next.handle(authReq);
  }
}
