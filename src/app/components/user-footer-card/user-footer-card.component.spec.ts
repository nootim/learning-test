import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFooterCardComponent } from './user-footer-card.component';

describe('UserFooterCardComponent', () => {
  let component: UserFooterCardComponent;
  let fixture: ComponentFixture<UserFooterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFooterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFooterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
