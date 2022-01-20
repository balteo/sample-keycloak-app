import {Component, OnInit} from '@angular/core';
import {filter, map, mergeMapTo, Observable, tap} from "rxjs";
import {Category} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";
import {sortCategories} from "./category-list-page.lib";
import {Router} from "@angular/router";
import {DeleteConfirmationComponent} from "../../../../shared/delete-confirmation/delete-confirmation.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'portal-category-list-page',
  templateUrl: './category-list-page.component.html',
  styleUrls: ['./category-list-page.component.scss']
})
export class CategoryListPageComponent implements OnInit {

  categories: Observable<Category[]>;

  constructor(private router: Router,
              private categoryService: CategoryService,
              private dialog: MatDialog) {
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
    return this.categoryService.deleteCategory(id)
      .pipe(
        tap(() => this.findCategories())
      );
  }

  openDeleteConfirmationDialog(category: Category) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      data: {
        entityType: 'la categorie',
        entityLabel: category.label
      }
    });

    dialogRef.afterClosed()
      .pipe(
        tap(console.log),
        filter(res => res === true),
        mergeMapTo(this.deleteCategory(category.id))
      ).subscribe();
  }

  navigateToUpdateCategoryForm(category: Category) {
    this.router.navigate(['/admin/categories/', category.id, 'edit']);
  }
}
