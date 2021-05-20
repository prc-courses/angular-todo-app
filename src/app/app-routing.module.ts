import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Todos } from './todos/todos.component';
import { TodoAdd } from './todos/todo-add.component';
import { TodoView } from './todos/todo-view.component';

const routes: Routes = [
  {path: '',                      redirectTo: '/todos', pathMatch: 'full'},
  {path: 'todos',                 component: Todos},
  {path: 'todos/filter/:filter',  component: Todos},
  {path: 'todos/add',             component: TodoAdd},
  {path: 'todos/:id',             component: TodoView},
  { path: '*',                    redirectTo: '/todos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
