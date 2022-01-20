import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../../models/category.model";

@Component({
  selector: 'portal-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent {

  @Input() category: Category;
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() updateEvent = new EventEmitter<Category>();

  delete(id: number) {
    this.deleteEvent.emit(id);
  }

  update(category: Category) {
    this.updateEvent.emit(category);
  }
}
