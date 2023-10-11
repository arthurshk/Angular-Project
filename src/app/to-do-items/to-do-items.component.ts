import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../to-do-item';
import { ITEMS } from '../mock-todo-items';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {
  items = ITEMS;
  selectedItem: ToDoItem;
  selectedName: string = '';
  selectedIsComplete: boolean = false;

  constructor() {
    if (this.items.length > 0)
      this.selectedItem = this.items[0];
    else
      this.selectedItem = { id: 0, name: '', isComplete: false };
  }

  ngOnInit() {
  }
  onCheckBoxClick(item: ToDoItem): void {
    item.isComplete = !item.isComplete;
    this.selectedItem = item;
    this.selectedName = item.name;
    this.selectedIsComplete = item.isComplete;
  }
}
