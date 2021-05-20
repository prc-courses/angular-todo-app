import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../common/todos.service';

@Component({
  selector: 'todos-list',
  template: `
  <div *ngFor="let todo of todos | todofilter : filter" (click)="selected.emit(todo)"
    class="item-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 [class.completed]="todo.completed" class="mdl-card__title-text">{{todo.title}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      {{todo.description}}
    </div>
    <div class="mdl-card__menu">
      <button *ngIf="!todo.completed" (click)="completed.emit(todo); $event.stopPropagation();"
        class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">check</i>
      </button>
      <button *ngIf="todo.completed"(click)="completed.emit(todo); $event.stopPropagation();"
        class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">undo</i>
      </button>
      <button (click)="deleted.emit(todo); $event.stopPropagation();"
        class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">close</i>
      </button>
    </div>
  </div>
  `,
  styles: [`
    .completed {
      text-decoration: line-through;
    }
  `]
})
export class TodosList {
  @Input() todos: Todo[];
  @Input() filter: string;
  @Output() selected = new EventEmitter();
  @Output() completed = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
