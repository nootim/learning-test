import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Todo } from 'src/app/model/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todos: Todo[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
    ) { }

  ngOnInit(): void {
    // request todos by userId
    this.activatedRoute.paramMap.pipe(
      map((params: ParamMap) => Number(params.get('userId'))),
      switchMap((userId) => this.todoService.getTodoByUserId(userId))
    ).subscribe(response => this.todos = response);
  }

  /**
   * Toggle the completed status
   * @param todo Object of type Todo
   */
  public toggleTodoStatus(todo: Todo) {
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo);
  }

  /**
   * Navigate to the incoming page
   */
  public goBack() {
    this.location.back();
  }

}
