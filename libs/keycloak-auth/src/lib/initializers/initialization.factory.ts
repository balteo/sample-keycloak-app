import {Observable} from "rxjs";
import {KeycloakAuthService} from "../services/keycloak-auth.service";

export const initializationFactory = (authService: KeycloakAuthService): () => Observable<boolean> => {
  return () => authService.initKeycloak()
}
