import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Post } from '../model/post.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  /**
   * Url of the Api
   */
  private readonly postsUrl = `${environment.apiUrl}/posts`;

  constructor(private http: HttpClient) {
  }

  /**
   * get all posts
   */
  public getPosts(): Observable<Post> {
    return this.http.get<Post>(`${this.postsUrl}`);
  }

  /**
   * get one post by his id
   * @param id id of a post
   */
  public getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.postsUrl}/${id}`);
  }

  /**
   * get all posts for a user
   * @param userId id of a user
   */
  public getPostsByUserId(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postsUrl}?userId=${userId}`);
  }

  /**
   * add one post
   * @param post an object of type Post
   */
  public addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.postsUrl}`, post);
  }

  /**
   * update an existing post
   * @param post an existing object of type post
   */
  public updateTodo(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.postsUrl}/${post.id}`, post);
  }

  /**
   * delete a post by his id
   * @param id of a post
   */
  public deletePost(id: number): Observable<Post>{
    return this.http.delete<Post>(`${this.postsUrl}/${id}`);
  }
}
