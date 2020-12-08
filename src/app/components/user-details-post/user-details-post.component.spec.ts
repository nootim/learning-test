import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsPostComponent } from './user-details-post.component';

describe('UserDetailsPostComponent', () => {
  let component: UserDetailsPostComponent;
  let fixture: ComponentFixture<UserDetailsPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
