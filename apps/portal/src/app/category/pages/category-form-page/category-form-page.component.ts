import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category.model";
import {tap} from "rxjs";

@Component({
  selector: 'portal-category-form-page',
  templateUrl: './category-form-page.component.html',
  styleUrls: ['./category-form-page.component.scss']
})
export class CategoryFormPageComponent implements OnInit {

  constructor(private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
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
