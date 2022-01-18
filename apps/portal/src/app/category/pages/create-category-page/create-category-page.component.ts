import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category.model";
import {tap} from "rxjs";

@Component({
  selector: 'portal-create-category-page',
  templateUrl: './create-category-page.component.html',
  styleUrls: ['./create-category-page.component.scss']
})
export class CreateCategoryPageComponent {

  constructor(private router: Router, private categoryService: CategoryService) {
  }

  navigateToCategories() {
    this.router.navigate(['/categories']);
  }

  createCategory(category: Category) {
    this.categoryService.createCategory(category)
      .pipe(
        tap(() => this.navigateToCategories())
      )
      .subscribe();
  }
}
