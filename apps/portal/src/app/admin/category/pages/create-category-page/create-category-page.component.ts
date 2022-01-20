import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category.model";
import {tap} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SaveConfirmationComponent} from "../../../../shared/save-confirmation/save-confirmation.component";

@Component({
  selector: 'portal-create-category-page',
  templateUrl: './create-category-page.component.html',
  styleUrls: ['./create-category-page.component.scss']
})
export class CreateCategoryPageComponent {

  constructor(private router: Router,
              private categoryService: CategoryService,
              private snackBar: MatSnackBar) {
  }

  navigateToCategories() {
    this.router.navigate(['/admin/categories']);
  }

  createCategory(category: Category) {
    this.categoryService.createCategory(category)
      .pipe(
        tap(() => this.navigateToCategories()),
        tap(() => this.displayCreateConfirmation(category))
      )
      .subscribe();
  }

  displayCreateConfirmation(category: Category) {
    this.snackBar.openFromComponent(SaveConfirmationComponent, {
      duration: 5000,
      data: {message: `La catégorie ${category.label} a bien été créée.`}
    });
  }
}
