import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {categoryExistsValidator} from "../../validators/category.validator";
import {CategoryService} from "../../services/category.service";

@Component({
  template: ''
})
export abstract class CategoryFormComponent {

  readonly minLengthLabel = 1;
  readonly maxLengthLabel = 50;
  readonly maxLengthDescription = 255;
  readonly alphanumeric = /^[0-9A-Za-zÀ-ÿ '.]+$/;
  readonly idValidators = [
    Validators.required
  ];
  readonly labelValidators = [
    Validators.required,
    Validators.pattern(this.alphanumeric),
    Validators.minLength(this.minLengthLabel),
    Validators.maxLength(this.maxLengthLabel)
  ];
  readonly labelAsyncValidators = [
    categoryExistsValidator(this.categoryService)
  ];
  readonly descriptionValidators = [
    Validators.pattern(this.alphanumeric),
    Validators.maxLength(this.maxLengthDescription)
  ];

  categoryForm: FormGroup;
  @Output() cancelEvent = new EventEmitter();

  protected constructor(protected fb: FormBuilder, protected categoryService: CategoryService) {
  }

  cancel() {
    this.cancelEvent.emit();
  }
}
