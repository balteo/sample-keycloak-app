import {map, Observable, tap} from "rxjs";
import {AsyncValidatorFn, FormGroup, ValidationErrors} from "@angular/forms";
import {CategoryService} from "../services/category.service";

export const categoryExistsValidator = (categoryService: CategoryService): AsyncValidatorFn => {
  return (categoryForm: FormGroup): Observable<ValidationErrors | null> => categoryService.findCategories()
    .pipe(
      map((categories) => categories.filter(category => category.id !== categoryForm.get('id')?.value)),
      map((categories) => categories.find(category => category.label.toLowerCase() === categoryForm.get('label').value.toLowerCase())),
      map((alreadyExists) => alreadyExists ? {categoryExists: true} : null),
      tap((errors) =>  categoryForm.get('label').setErrors(errors)),
    );
};
