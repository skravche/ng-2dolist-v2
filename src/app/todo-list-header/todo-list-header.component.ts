import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.scss']
})
export class TodoListHeaderComponent {

  newTodo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  addTodo() {

    console.log(this.newTodo);

    this.add.emit(this.newTodo);
    const len = this.newTodo;

    if (len.title.length > 0) {
      console.log('>0');
    }
    this.newTodo = new Todo();

  }

}
