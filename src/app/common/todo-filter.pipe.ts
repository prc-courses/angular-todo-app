import {Pipe, Injectable, PipeTransform} from '@angular/core';
import {Todo} from './todos.service';

@Pipe({
    name: 'todofilter',
    pure: false
})
@Injectable()
export class TodoFilterPipe implements PipeTransform {
  transform(todos: Todo[], arg: string): Todo[] {
    if(todos != undefined && arg != undefined) {
      switch(arg) {
        case 'completed':
          return todos.filter(todo => todo.completed);
        case 'todos':
          return todos.filter(todo => !todo.completed);
        case 'all':
        default:
          return todos;
      }
    } else {
      return todos;
    }
  }
}
