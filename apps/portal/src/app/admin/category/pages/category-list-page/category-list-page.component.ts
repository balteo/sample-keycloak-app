import {Component, OnInit} from '@angular/core';
import {map, Observable, tap} from "rxjs";
import {Category} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";
import {sortCategories} from "./category-list-page.lib";
import {Router} from "@angular/router";

@Component({
  selector: 'portal-category-list-page',
  templateUrl: './category-list-page.component.html',
  styleUrls: ['./category-list-page.component.scss']
})
export class CategoryListPageComponent implements OnInit {

  categories: Observable<Category[]>;

  constructor(private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.findCategories();
  }

  private findCategories() {
    this.categories = this.categoryService.findCategories()
      .pipe(
        map(sortCategories)
      );
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id)
      .pipe(
        tap(() => this.findCategories())
      )
      .subscribe();
  }

  navigateToUpdateCategoryForm(category: Category) {
    this.router.navigate(['/admin/categories/', category.id, 'edit']);
  }
}
