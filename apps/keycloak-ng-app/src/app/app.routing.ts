import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PublicComponent} from "./components/public/public.component";
import {PrivateComponent} from "./components/private/private.component";
import {AuthGuard} from "@keycloak-auth/guards/auth.guard";

const routes: Routes = [
  {
    path: 'public',
    component: PublicComponent
  },
  {
    path: 'private',
    canActivate: [AuthGuard],
    component: PrivateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'disabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

