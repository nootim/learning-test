import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from '../model/todo.model';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly todosUrl = `${environment.apiUrl}/todos`;

  constructor(private http: HttpClient) { }

  /**
   * get all todos for one user
   * @param userId id of the todo's owner
   */
  public getTodoByUserId(userId: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}?userId=${userId}`);
  }

  /**
   * add a new todo for a user
   * @param todo object of type Todo
   */
  public addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.todosUrl}`, todo);
  }

  /**
   * update an existing todo
   * @param todo an existing object of type todo
   */
  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.todosUrl}/${todo.id}`, todo);
  }

  /**
   * delete a todo by his id
   * @param id id of a todo
   */
  public deleteTodo(id: number): Observable<Todo>{
    return this.http.delete<Todo>(`${this.todosUrl}/${id}`);
  }
}
