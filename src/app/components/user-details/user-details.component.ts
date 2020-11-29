import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { TodoService } from 'src/app/services/todo.service';
import { PostService } from 'src/app/services/post.service';
import { Todo } from 'src/app/model/todo.model';
import { Post } from 'src/app/model/post.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  public userDetail$: Observable<{todos: Todo[], user: User, posts: Post[]}>;
  public isOpenModal = false;
  public bodyTitle: string;
  public bodyPost: string;
  private user$: Observable<User>;
  private posts$: Observable<Post[]>;
  private todos$: Observable<Todo[]>;

  private updateTodoSubject: Subject<Todo> = new Subject();


  constructor(
    private userService: UserService,
    private todoService: TodoService,
    private postService: PostService,
    private location: Location,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user$ = this.activatedRoute.paramMap.pipe(
      map((params: ParamMap) => Number(params.get('userId'))),
      switchMap((userId) => this.userService.getUserById(userId)),
    );

    this.posts$ = this.activatedRoute.paramMap.pipe(
      map((params: ParamMap) => Number(params.get('userId'))),
      switchMap((userId: number) => this.postService.getPostsByUserId(userId)),
    );

    this.todos$ = this.activatedRoute.paramMap.pipe(
      map((params: ParamMap) => Number(params.get('userId'))),
      switchMap((userId: number) => this.todoService.getTodoByUserId(userId))
    );

    this.userDetail$ = combineLatest([
      this.todos$,
      this.user$,
      this.posts$]).pipe(
      map(([todos, user, posts]) => ({ todos, user, posts }))
    );

    this.updateTodoSubject.pipe(
      map((todo: Todo) => this.todoService.updateTodo(todo))
    ).subscribe();

    this.userDetail$.subscribe();
  }

  ngOnDestroy() {
    this.updateTodoSubject.complete();
    this.updateTodoSubject.unsubscribe();
  }

  /**
   * go back to the previous page
   */
  public goBack() {
    this.location.back();
  }

  /**
   * Update status of Todo completed or not
   * @param todo Object Todo
   */
  public updateStatus(todo: Todo) {
   this.updateTodoSubject.next(todo);
  }

  /**
   * Manage the content and the opended status of a modal
   * @param post (title and body of a Post)
   */
  public manageModal(post: {title: string, body: string}) {
    this.addModalContent(post);
    this.openModal();
  }

  /**
   * close current opened modal
   */
  public closeModal() {
    this.isOpenModal = false;
  }

  /**
   * open modal
   */
  private openModal() {
    this.isOpenModal = true;
  }

  /**
   * Add the content for the current modal
   * @param post (title and body of Post)
   */
  private addModalContent(post: {title: string, body: string}) {
    this.bodyPost = post.body;
    this.bodyTitle = post.title;
  }

}
