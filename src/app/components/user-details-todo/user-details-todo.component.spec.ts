import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsTodoComponent } from './user-details-todo.component';

describe('UserDetailsTodoComponent', () => {
  let component: UserDetailsTodoComponent;
  let fixture: ComponentFixture<UserDetailsTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
