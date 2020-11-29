import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details-user',
  templateUrl: './user-details-user.component.html',
  styleUrls: ['./user-details-user.component.scss']
})
export class UserDetailsUserComponent implements OnInit {
  /**
   * label for a row
   */
  @Input()
  public label: string;

  /**
   * value for a row
   */
  @Input()
  public value: string | number;

  constructor() { }

  ngOnInit(): void {
  }

}
