import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { TodosComponent } from './components/todos/todos.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/:userId', component: UserDetailsComponent },
  { path: 'todos/:userId', component: TodosComponent },
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
