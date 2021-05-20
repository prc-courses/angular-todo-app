import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TodosService, Todo} from '../common/todos.service';

@Component({
  selector: 'todo-add',
  template: `
  <div class="mdl-grid todoadd">
    <div class="mdl-cell mdl-cell--12-col">
      <todo-detail
      (saved)="saveTodo($event)" (cancelled)="goBack()"
      [todo]="thisTodo">
        Select a Todo
      </todo-detail>
    </div>
  </div>
  `,
  styles: [`
    .todoadd {
      padding: 20px;
    }
  `]
})
export class TodoAdd implements OnInit {
  thisTodo: Todo;

  constructor(private todosService: TodosService, private router: Router) {}

  ngOnInit() {
    this.resetTodo();
  }

  resetTodo() {
    let emptyTodo: Todo = {id: null, title: '', description: '', completed: false};
    this.thisTodo = emptyTodo;
  }

  goBack() {
    this.router.navigate(['/todos']);
  }

  saveTodo(todo: Todo) {
    this.todosService.saveTodo(todo)
      .then(responseTodo => {
        this.router.navigate(['/todos']);
      });

    // Generally, we would want to wait for the result of `todosService.saveTodo`
    // before resetting the current item.
    this.resetTodo();
  }
}
