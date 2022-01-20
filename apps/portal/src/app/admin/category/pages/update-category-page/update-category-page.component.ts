import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category.model";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'portal-update-category-page',
  templateUrl: './update-category-page.component.html',
  styleUrls: ['./update-category-page.component.scss']
})
export class UpdateCategoryPageComponent implements OnInit {

  category: Observable<Category>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('id');
    this.category = this.categoryService.findCategoryById(Number(categoryId));
  }

  navigateToCategories() {
    this.router.navigate(['/admin/categories']);
  }

  updateCategory(category: Category) {
    this.categoryService.updateCategory(category)
      .pipe(
        tap(() => this.navigateToCategories())
      )
      .subscribe();
  }
}
