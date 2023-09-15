import { Component } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: Todo[] = [
    new Todo('Swimming'),
    new Todo('Breakfast'),
    new Todo('College'),
    new Todo('Shopping'),
    new Todo('Dinner'),
  ];
}
