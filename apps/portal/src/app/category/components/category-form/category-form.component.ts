import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../models/category.model";

@Component({
  selector: 'portal-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  categoryForm: FormGroup;
  @Output() cancelEvent = new EventEmitter();
  @Output() createEvent = new EventEmitter<Category>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      label: ['', Validators.required],
      description: ['']
    });
  }

  cancel() {
    this.cancelEvent.emit();
  }

  create() {
    if (this.categoryForm.valid) {
      this.createEvent.emit(this.categoryForm.value);
    }
  }
}
