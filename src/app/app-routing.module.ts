import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SelectorContext } from '@angular/compiler';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AuthGuard } from './signup/auth-guard';
import { UserEditComponent } from './user/user-edit/user-edit.component';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: SignupComponent
  },
  {
    path: 'user', component: UserFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'details', component: UserListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:email', component: UserFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit', component: UserEditComponent,
    canActivate: [AuthGuard]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
