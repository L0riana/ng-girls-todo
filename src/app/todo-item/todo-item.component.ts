import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'todo-todo-item',
  template: `
  <div>
    <div>
    <input type="checkbox"
         class="todo-checkbox"
         (click)="completeItem()"/>
    <span class="todo-title"  [ngClass]="{'todo-complete': item.completed == true}">
    {{ item.title }}
  </span>
    </div>

    <button class="btn btn-red" (click)="removeItem()">
      remove
    </button>
  </div>
`,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.item);
  }
  completeItem() {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }

}
