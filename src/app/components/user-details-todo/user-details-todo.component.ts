import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-user-details-todo',
  templateUrl: './user-details-todo.component.html',
  styleUrls: ['./user-details-todo.component.scss']
})
export class UserDetailsTodoComponent implements OnInit {
  @Input()
  public todos: Todo[];

  @Output()
  public updateStatus: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * update status of a todo
   * @param status boolean of the current status
   */
  public onTodoUpdateStatus(todo: Todo): void {
    todo.completed = !todo.completed;
    // emit object with the new status
    this.updateStatus.emit(todo);
  }

}
