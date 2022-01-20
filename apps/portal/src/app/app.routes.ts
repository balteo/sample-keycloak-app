import {CategoryListPageComponent} from "./admin/category/pages/category-list-page/category-list-page.component";
import {CreateCategoryPageComponent} from "./admin/category/pages/create-category-page/create-category-page.component";
import {UpdateCategoryPageComponent} from "./admin/category/pages/update-category-page/update-category-page.component";

export const routes = [
  {
    component: CategoryListPageComponent,
    path: 'admin/categories'
  },
  {
    component: CreateCategoryPageComponent,
    path: 'admin/categories/new'
  },
  {
    path: 'admin',
    redirectTo: 'admin/categories',
    pathMatch: 'full'
  },
  {
    component: UpdateCategoryPageComponent,
    path: 'admin/categories/:id/edit'
  }
];
