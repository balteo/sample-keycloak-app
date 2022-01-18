import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  findCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/category');
  }

  createCategory(category: Category): Observable<unknown> {
    return this.http.post('http://localhost:3000/category', category);
  }

  updateCategory(category: Category): Observable<unknown> {
    return this.http.put('http://localhost:3000/category/' + category.id, category);
  }

  deleteCategory(categoryId: number): Observable<unknown> {
    return this.http.delete('http://localhost:3000/category/' + categoryId);
  }

  findCategoryById(categoryId: number): Observable<Category> {
    return this.http.get<Category>('http://localhost:3000/category/' + categoryId);
  }
}
