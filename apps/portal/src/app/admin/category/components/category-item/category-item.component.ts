import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../../models/category.model";

@Component({
  selector: 'portal-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent {

  @Input() category: Category;
  @Output() deleteEvent = new EventEmitter<Category>();
  @Output() updateEvent = new EventEmitter<Category>();

  delete(category: Category) {
    this.deleteEvent.emit(category);
  }

  update(category: Category) {
    this.updateEvent.emit(category);
  }
}
