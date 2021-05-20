import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../common/todos.service';

@Component({
  selector: 'todo-detail',
  template: `
  <div class="item-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text" *ngIf="todo.id">Editing</h2>
      <h2 class="mdl-card__title-text" *ngIf="!todo.id">Adding New</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <form novalidate>
          <div class="mdl-textfield mdl-js-textfield">
            <label>Title</label>
            <input [(ngModel)]="todo.title"
              name="title"
              placeholder="Enter a title"
              class="mdl-textfield__input" type="textarea">
          </div>

          <div class="mdl-textfield mdl-js-textfield">
            <label>Description</label>
            <textarea [(ngModel)]="todo.description"
              name="description"
              placeholder="Enter a description"
              class="mdl-textfield__input"></textarea>
          </div>
      </form>
    </div>
    <div class="mdl-card__actions">
        <button type="submit" (click)="cancelled.emit(todo)"
          class="mdl-button mdl-js-button mdl-js-ripple-effect">Cancel</button>
        <button type="submit" (click)="saved.emit(todo)"
          class="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect">Save</button>
    </div>
  </div>
  `
})
export class TodoDetail {
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() todo: Todo;
}
