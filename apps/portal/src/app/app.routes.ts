import {CategoryListPageComponent} from "./admin/category/pages/category-list-page/category-list-page.component";
import {CreateCategoryPageComponent} from "./admin/category/pages/create-category-page/create-category-page.component";
import {UpdateCategoryPageComponent} from "./admin/category/pages/update-category-page/update-category-page.component";
import {
  ApplicationListPageComponent
} from "./admin/application/pages/application-list-page/application-list-page.component";

export const routes = [
  {
    path: 'admin',
    redirectTo: 'admin/categories',
    pathMatch: 'full'
  },
  {
    component: CategoryListPageComponent,
    path: 'admin/categories'
  },
  {
    component: CreateCategoryPageComponent,
    path: 'admin/categories/new'
  },
  {
    component: UpdateCategoryPageComponent,
    path: 'admin/categories/:id/edit'
  },
  {
    component: ApplicationListPageComponent,
    path: 'admin/applications'
  }
];
