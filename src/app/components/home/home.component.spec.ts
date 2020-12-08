import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let userService: UserService;

  // create a spy for the method 'navigateByUrl' of the router
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule],
      declarations: [HomeComponent],
      providers: [
        UserService,
        { provide: Router, useValue: routerSpy }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    userService = TestBed.inject(UserService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not get users before ngOnInit lifecycle has been called', () => {
    spyOn(userService, 'getUsers').and.returnValue(of(users));

    expect(userService.getUsers).not.toHaveBeenCalled();
    expect(component.users).not.toEqual(users);
  });

  it('should get the users in ngOnInit lifecycle', () => {
    spyOn(userService, 'getUsers').and.returnValue(of(users));

    component.ngOnInit();

    expect(userService.getUsers).toHaveBeenCalled();
    expect(component.users).toEqual(users);
  });

  it('should add a user in the falseDeletedId', () => {
    spyOn(userService, 'deleteUser').and.returnValue(of(null));

    expect(component.falseDeleteId.length).toBe(0);

    component.ngOnInit();

    component.deleteUser(1);

    expect(component.falseDeleteId.length).toBe(1);
  });

  it('should navigate to users-details with the good parameter', () => {

    component.goToUserDetails(1);

    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('users/1');
  });

  it('should navigate to users-details with the good parameter', () => {

    component.goToTodo(2);

    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('todos/2');
  });

});

const users: User[] = [
  {
    id: 1,
    name: 'nootim',
    avatar: 'https://avatar_url.com',
    username: 'devNootim',
    email: 'dev@nootim.io',
    address: {
      street: 'place de la Bourse',
      suite: 'Appt 255',
      city: 'Bordeaux',
      zipcode: '33000',
      geo: {
        lat: '45n',
        lng: '18E'
      }
    },
    phone: '+33612345678',
    website: 'https://nootim.io',
    company: {
      name: 'nootim',
      catchPhrase: 'Nous team',
      bs: 'Nous team'
    }
  }
];
