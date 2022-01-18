import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {CategoryListComponent} from './category/components/category-list/category-list.component';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {CategoryItemComponent} from './category/components/category-item/category-item.component';
import {MatButtonModule} from "@angular/material/button";
import {CategoryPageComponent} from './category/pages/category-page/category-page.component';

@NgModule({
  declarations: [AppComponent, CategoryListComponent, CategoryItemComponent, CategoryPageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot([
      {
        component: CategoryPageComponent,
        path: 'categories'
      }
    ], {initialNavigation: 'enabledBlocking'}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
