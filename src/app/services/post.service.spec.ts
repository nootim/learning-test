import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostService } from './post.service';
import { environment } from 'src/environments/environment';
import { Post } from '../model/post.model';

describe('PostService', () => {
  let service: PostService;
  let httpTestingController: HttpTestingController;
  const postsUrl = `${environment.apiUrl}/posts`;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PostService
      ]
    });
    // create instance of PostService
    service = TestBed.inject(PostService);

    // Create instance of httpTestingController
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all posts', () => {
    service.getPosts().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });

    // define mock request to be call once
    const req = httpTestingController.expectOne(postsUrl);

    expect(req.request.method).toBe('GET');

    req.flush(dummyPosts);
  });

  it('should retrieve one post by id', () => {
    service.getPostById(1).subscribe(post => {
      expect(post).toEqual({
        id: 1,
        userId: 10,
        title: 'first post',
        body: 'something in the body'
      });
    });

    // define mock request to be call once
    const req = httpTestingController.expectOne(postsUrl + '/1');

    expect(req.request.method).toBe('GET');
    expect(req.request.responseType).toBe('json');

    // launch the http method
    req.flush({
      id: 1,
      userId: 10,
      title: 'first post',
      body: 'something in the body'
    });
  });

  it('should add a post', () => {
    const newPost = { userId: 12, title: 'the new', body: 'the body' };

    service.addPost(newPost).subscribe(post => {
      expect(post).toEqual(newPost);
    });

    const req = httpTestingController.expectOne(postsUrl);

    expect(req.request.method).toBe('POST');
    expect(req.request.responseType).toBe('json');

    req.flush(newPost);
  });

  it('should update a post', () => {
    const newPost = { id: 6, userId: 12, title: 'the new updated', body: 'the body' };

    newPost.body = 'body updated';

    service.updatePost(newPost).subscribe(post => {
      expect(post).toEqual(newPost);
      expect(post.body).toBe('body updated');
    });

    const req = httpTestingController.expectOne(postsUrl + '/6');

    expect(req.request.method).toBe('PUT');
    expect(req.request.responseType).toBe('json');

    req.flush(newPost);
  });

  it('should delete a post', () => {
    const deleted = {
      id: 1,
      userId: 10,
      title: 'first post',
      body: 'something in the body'
    };

    service.deletePost(1).subscribe(post => {
      expect(post).toEqual(deleted);
    });

    const req = httpTestingController.expectOne(postsUrl + '/1');

    expect(req.request.method).toBe('DELETE');
    expect(req.request.responseType).toBe('json');

    req.flush(deleted);
  });

/**
 *  End of test, mocks and dummies for tests here:
 */


  const dummyPosts: Post[] = [
    {
      id: 1,
      userId: 10,
      title: 'first post',
      body: 'something in the body'
    },
    {
      id: 2,
      userId: 20,
      title: 'second post',
      body: 'this is another body'
    },
  ];

});
