import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

  private lastID: number = 0;
  private todos: Todo[] = [];

  addTodo(todo: Todo): TodoDataService {

    if (!todo.id) {
      todo.id = ++this.lastID;
    }
    this.todos.push(todo);

    return this;
  }

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

 updateTodoById(id: number, values: object = {}): Todo {

    const todo = this.getTodoById(id);

    if (!todo) {
      return null;
    }
    Object.assign(todo, values);

    return todo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos.find(todo => todo.id === id);
  }

  toggleTodoComplete(todo: Todo) {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete,
    });

    return updatedTodo;
  }
}
