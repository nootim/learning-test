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

  it('should toggle status when onTodoUpdateStatus is call', () => {

    const todo = {
      id: 1,
      userId: 1,
      completed: false,
      title: 'title'
    };

    component.onTodoUpdateStatus(todo);

    expect(todo.completed).toBe(true);
  });

  it('should emit todo when onTodoUpdateStatus is call', () => {
    spyOn(component.updateStatus, 'emit');

    const todo = {
      id: 1,
      userId: 1,
      completed: false,
      title: 'title'
    };

    component.onTodoUpdateStatus(todo);

    expect(component.updateStatus.emit).toHaveBeenCalledWith(todo);
  });
});
