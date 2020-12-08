import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserFooterCardComponent } from './components/user-footer-card/user-footer-card.component';
import { TodosComponent } from './components/todos/todos.component';
import { UserDetailsTodoComponent } from './components/user-details-todo/user-details-todo.component';
import { UserDetailsPostComponent } from './components/user-details-post/user-details-post.component';
import { UserDetailsUserComponent } from './components/user-details-user/user-details-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailsComponent,
    UserFooterCardComponent,
    TodosComponent,
    UserDetailsTodoComponent,
    UserDetailsPostComponent,
    UserDetailsUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
