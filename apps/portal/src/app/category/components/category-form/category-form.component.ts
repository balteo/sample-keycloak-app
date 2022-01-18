import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Category} from "../../models/category.model";

@Component({
  template: ''
})
export abstract class CategoryFormComponent {

  categoryForm: FormGroup;
  @Output() cancelEvent = new EventEmitter();
  @Output() createEvent = new EventEmitter<Category>();

  protected constructor(protected fb: FormBuilder) {
  }

  abstract initForm();
  abstract save();

  cancel() {
    this.cancelEvent.emit();
  }
}
