import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post.model';

@Component({
  selector: 'app-user-details-post',
  templateUrl: './user-details-post.component.html',
  styleUrls: ['./user-details-post.component.scss']
})
export class UserDetailsPostComponent implements OnInit {
  @Input()
  public posts: Observable<Post[]>;

  @Output()
  public openModal: EventEmitter<{title: string, body: string}> = new EventEmitter<{title: string, body: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Emit value of the current post
   * @param title title of a post
   * @param body body of a post
   */
  public postValue(title: string, body: string) {
    this.openModal.emit({title, body});
  }

}
