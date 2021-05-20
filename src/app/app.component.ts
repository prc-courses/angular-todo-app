import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'todo-app';

  links = {
    home: ['/'],
    todos: ['/todos'],
    completed: ['/todos/filter/completed'],
    all: ['/todos/filter/all'],
    view: ['/todos/:id'],
    add: ['/todos/add']
  }
}
