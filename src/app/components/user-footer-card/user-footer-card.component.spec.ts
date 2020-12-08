import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UserFooterCardComponent } from './user-footer-card.component';

describe('UserFooterCardComponent', () => {
  let hostComponent: HostComponent;
  let hostFixture: ComponentFixture<HostComponent>;
  let userInfo;
  let userInfoEl;
  let deleteButton;
  let deleteButtonEl;
  let todoButton;
  let todoButtonEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFooterCardComponent, HostComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    hostFixture = TestBed.createComponent(HostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();

    userInfo = hostFixture.debugElement.query(By.css('.is-success'));
    deleteButton = hostFixture.debugElement.query(By.css('.is-danger'));
    todoButton = hostFixture.debugElement.query(By.css('.is-info'));

    userInfoEl = userInfo.nativeElement;
    deleteButtonEl = deleteButton.nativeElement;
    todoButtonEl = todoButton.nativeElement;
    hostFixture.detectChanges();

  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
  });

  it('should emit when userInfoClicked', () => {
    spyOn(hostComponent, 'onUserInfo');

    userInfoEl.click();

    expect(hostComponent.onUserInfo).toHaveBeenCalledWith(1);
  });

  it('should emit when todo button has been clicked', () => {
    spyOn(hostComponent, 'onTodoClicked');

    todoButtonEl.click();

    expect(hostComponent.onTodoClicked).toHaveBeenCalledWith(1);
  });

  it('should emit when delete button clicked', () => {
    spyOn(hostComponent, 'onDeleteClicked');

    deleteButtonEl.click();

    expect(hostComponent.onDeleteClicked).toHaveBeenCalledWith(1);
  });

});

// Define a host component to test my child component
@Component({
  template: `<app-user-footer-card
  (userInfoClicked)="onUserInfo($event)"
  (todoClicked)="onTodoClicked($event)"
  (deleteClicked)="onDeleteClicked($event)"
  [userId]="userId"></app-user-footer-card>`
})
class HostComponent {
  userId = 1;

  onUserInfo(id: number) {
    return id;
  }

  onTodoClicked(id: number) {
    return id;
  }

  onDeleteClicked(id: number) {
    return id;
  }
}
