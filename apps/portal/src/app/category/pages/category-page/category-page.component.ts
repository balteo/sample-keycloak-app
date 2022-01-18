import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import {Category} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";
import {sortCategories} from "./category-page.lib";

@Component({
  selector: 'portal-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

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
