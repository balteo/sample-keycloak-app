import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { environment } from '../environments/environment';
import {AppComponent} from './app.component';
import {PublicComponent} from './components/public/public.component';
import {PrivateComponent} from './components/private/private.component';
import {AppRoutingModule} from "./app.routing";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {KeycloakAuthModule} from "@keycloak-auth/keycloak-auth.module";
import {AuthInterceptor} from "@keycloak-auth/interceptors/auth.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, PublicComponent, PrivateComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    KeycloakAuthModule.forRoot(environment.keycloakConfig),
    BrowserAnimationsModule
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializationFactory,
    //   deps: [AuthService],
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
