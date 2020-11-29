import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /**
   * Array of all users provided by the get request
   */
  public users: User[];
  /**
   * push in an array all deleted users (to update UI because of false Api)
   */
  public falseDeleteId: number[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  /**
   * delete a user by his id
   * @param userId id of a user
   */
  public deleteUser(userId: number) {
    this.userService.deleteUser(userId)
    .subscribe((_) => this.falseDeleteId.push(userId));
  }

  /**
   * Go tu user detail page by userId
   * @param userId id of a user
   */
  public goToUserDetails(userId: number) {
    this.router.navigateByUrl(`users/${userId}`);
  }

  /**
   * Go to Todo page by userId
   * @param userId id of a user
   */
  public goToTodo(userId: number) {
    this.router.navigateByUrl(`todos/${userId}`);
  }

}
