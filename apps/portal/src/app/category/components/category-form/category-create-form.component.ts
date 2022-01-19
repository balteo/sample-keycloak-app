import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Category} from "../../models/category.model";
import {CategoryFormComponent} from "./category-form.component";

@Component({
  selector: 'portal-category-create-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryCreateFormComponent extends CategoryFormComponent implements OnInit {

  title = 'Ajouter une catégorie';
  @Output() createEvent = new EventEmitter<Category>();

  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.categoryForm = this.fb.group({
      label: ['', this.labelValidators],
      description: ['', this.descriptionValidators]
    });
  }

  save() {
    if (this.categoryForm.valid) {
      this.createEvent.emit(this.categoryForm.value);
    }
  }
}
