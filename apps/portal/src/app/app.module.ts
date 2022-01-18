import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {CategoryItemComponent} from './category/components/category-item/category-item.component';
import {MatButtonModule} from "@angular/material/button";
import {CategoryListPageComponent} from './category/pages/category-list-page/category-list-page.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatListModule} from "@angular/material/list";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CreateCategoryPageComponent} from './category/pages/create-category-page/create-category-page.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatChipsModule} from "@angular/material/chips";
import {CategoryCreateFormComponent} from "./category/components/category-form/category-create-form.component";
import {UpdateCategoryPageComponent} from "./category/pages/update-category-page/update-category-page.component";
import {CategoryUpdateFormComponent} from "./category/components/category-form/category-update-form.component";

@NgModule({
  declarations: [AppComponent,
    CategoryItemComponent,
    CategoryListPageComponent,
    CategoryCreateFormComponent,
    CategoryUpdateFormComponent,
    CreateCategoryPageComponent,
    UpdateCategoryPageComponent],
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
        component: CategoryListPageComponent,
        path: 'categories'
      },
      {
        component: CreateCategoryPageComponent,
        path: 'categories/new'
      },
      {
        component: UpdateCategoryPageComponent,
        path: 'categories/:id'
      }
    ], {initialNavigation: 'enabledBlocking'}),
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
