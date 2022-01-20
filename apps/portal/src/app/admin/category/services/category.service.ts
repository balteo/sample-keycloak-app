import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly apiPrefix = '/api';

  constructor(private http: HttpClient) {
  }

  findCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiPrefix}/category`);
  }

  createCategory(category: Category): Observable<unknown> {
    return this.http.post(`${this.apiPrefix}/category`, category);
  }

  updateCategory(category: Category): Observable<unknown> {
    return this.http.put(`${this.apiPrefix}/category/${category.id}`, category);
  }

  deleteCategory(categoryId: number): Observable<unknown> {
    return this.http.delete(`${this.apiPrefix}/category/${categoryId}`);
  }

  findCategoryById(categoryId: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiPrefix}/category/${categoryId}`);
  }
}
