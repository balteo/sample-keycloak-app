import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Category} from "../../models/category.model";
import {CategoryFormComponent} from "./category-form.component";

@Component({
  selector: 'portal-category-update-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryUpdateFormComponent extends CategoryFormComponent implements OnChanges {

  title = 'Modifier une catégorie';
  @Input() category;
  @Output() updateEvent = new EventEmitter<Category>();

  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category'].currentValue) {
      this.initForm();
    }
  }

  initForm() {
    this.categoryForm = this.fb.group({
      id: [this.category.id],
      order: [this.category.order],
      label: [this.category.label, this.labelValidators],
      description: [this.category.description, this.descriptionValidators]
    });
  }

  save() {
    if (this.categoryForm.valid) {
      this.updateEvent.emit(this.categoryForm.value);
    }
  }
}
