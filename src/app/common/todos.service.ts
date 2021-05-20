import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

const BASE_URL = 'http://localhost:3000/todos/';
const HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

@Injectable()
export class TodosService {
  constructor(private http: HttpClient) {}

  loadTodos() {
    return this.http.get<Todo[]>(BASE_URL);
  }

  getTodo(id: number) {
    return this.http.get<Todo>(BASE_URL + id.toString());
  }

  saveTodo(item: Todo) {
    return (item.id) ? this.updateTodo(item) : this.createTodo(item);
  }

  createTodo(item: Todo) {
    return this.http.post<Todo>(`${BASE_URL}`, item, HEADER);
  }

  updateTodo(item: Todo) {
    return this.http.put<Todo>(`${BASE_URL}${item.id}`, item, HEADER);
  }

  deleteTodo(item: Todo) {
    return this.http.delete<Todo>(`${BASE_URL}${item.id}`);
  }
}
