import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-footer-card',
  templateUrl: './user-footer-card.component.html',
  styleUrls: ['./user-footer-card.component.scss']
})
export class UserFooterCardComponent implements OnInit {

  @Input()
  public readonly userId: number;

  @Output()
  public userInfoClicked: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public todoClicked: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public deleteClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * emit userId when button details clicked
   */
  public onDetails() {
    this.userInfoClicked.emit(this.userId);
  }

  /**
   * emit userId when button todo clicked
   */
  public onTodo() {
    this.todoClicked.emit(this.userId);
  }

  /**
   * emit userId when button delete clicked
   */
  public onDelete() {
    this.deleteClicked.emit(this.userId);
  }

}
