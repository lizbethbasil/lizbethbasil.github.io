import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewbookComponent } from './newbook/newbook.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'booklist', component: BooklistComponent},
  {path: 'newbook', component: NewbookComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
