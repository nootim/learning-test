import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * Url of User api
   */
  private readonly usersUrl = `${environment.apiUrl}/users`;

  /**
   * Url of Pictures for avatars
   */
  private readonly avatars = [
    'https://i.pravatar.cc/100?img=26',
    'https://i.pravatar.cc/100?img=7',
    'https://i.pravatar.cc/100?img=5',
    'https://i.pravatar.cc/100?img=46',
    'https://i.pravatar.cc/100?img=9',
    'https://i.pravatar.cc/100?img=21',
    'https://i.pravatar.cc/100?img=17',
    'https://i.pravatar.cc/100?img=4',
    'https://i.pravatar.cc/100?img=25',
    'https://i.pravatar.cc/100?img=10',
  ];

  constructor(private http: HttpClient) {
  }

  /**
   * get all users
   */
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}`)
      .pipe(
        map(users => {
          users.forEach((user, index) => {
            user.avatar = this.avatars[index];
          });
          return users;
        }),
      );
  }

  /**
   * get one user by his id
   * @param id id of one user
   */
  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`).pipe(
      map((user: User) => {
        const index = user.id - 1;
        user.avatar = this.avatars[index];
        return user;
      }
    ));
  }

  /**
   * add one user
   * @param user an object of type user
   */
  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.usersUrl}`, user);
  }

  /**
   * delete a user by his id
   * @param id id of a user
   */
  public deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.usersUrl}/${id}`);
  }
}
