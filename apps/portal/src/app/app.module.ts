import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {CategoryItemComponent} from './category/components/category-item/category-item.component';
import {MatButtonModule} from "@angular/material/button";
import {CategoryPageComponent} from './category/pages/category-page/category-page.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatListModule} from "@angular/material/list";
import {CategoryFormComponent} from './category/components/category-form/category-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { CategoryFormPageComponent } from './category/pages/category-form-page/category-form-page.component';

@NgModule({
  declarations: [AppComponent, CategoryItemComponent, CategoryPageComponent, CategoryFormComponent, CategoryFormPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule.forRoot([
      {
        component: CategoryPageComponent,
        path: 'categories'
      },
      {
        component: CategoryFormPageComponent,
        path: 'categories/new'
      }
    ], {initialNavigation: 'enabledBlocking'}),
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
