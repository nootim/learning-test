import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UserDetailsUserComponent } from './user-details-user.component';

describe('UserDetailsUserComponent', () => {
  let component: UserDetailsUserComponent;
  let fixture: ComponentFixture<UserDetailsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the label for a row', () => {
    component.label = 'Address';

    fixture.detectChanges();

    const label = fixture.debugElement
    .nativeElement.querySelector('.nootim-label');

    expect(label.textContent).toBe('Address')

  });

  it('should display the value for a row', () => {
    component.value = 'Eiffel Tower 1st floor';

    fixture.detectChanges();

    const value = fixture.debugElement
    .nativeElement.querySelector('.nootim-value');

    expect(value.textContent).toBe('Eiffel Tower 1st floor')

  })
});
