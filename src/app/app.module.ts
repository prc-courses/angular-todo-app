import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Todos} from './todos/todos.component';
import { TodoAdd } from './todos/todo-add.component';
import { TodoView } from './todos/todo-view.component';
import { TodoDetail } from './todos/todo-detail.component';
import { TodosList } from './todos/todos-list.component';
import { TodosService } from './common/todos.service';
import { TodoFilterPipe } from './common/todo-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Todos,
    TodoAdd,
    TodoView,
    TodoDetail,
    TodosList,
    TodoFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
