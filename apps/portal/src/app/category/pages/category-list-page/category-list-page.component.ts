import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import {Category} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";
import {sortCategories} from "./category-list-page.lib";

@Component({
  selector: 'portal-category-list-page',
  templateUrl: './category-list-page.component.html',
  styleUrls: ['./category-list-page.component.scss']
})
export class CategoryListPageComponent implements OnInit {

  categories: Observable<Category[]>;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categories = this.categoryService.findCategories()
      .pipe(
        map(sortCategories)
      );
  }


}
