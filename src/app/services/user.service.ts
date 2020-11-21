import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * Url of User api
   */
  private readonly usersUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {
  }

  /**
   * get all users
   */
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}`);
  }

  /**
   * get one user by his id
   * @param id id of one user
   */
  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
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
  public deleteUser(id: number): Observable<User>{
    return this.http.delete<User>(`${this.usersUrl}/${id}`);
  }
}
