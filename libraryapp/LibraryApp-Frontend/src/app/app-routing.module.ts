import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AboutComponent } from './about/about.component';
import { AuthorlistComponent } from './authorlist/authorlist.component';
import { BooklistComponent } from './booklist/booklist.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { NewbookComponent } from './newbook/newbook.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'authorlist', component: AuthorlistComponent},
  {path: 'booklist', component: BooklistComponent},
  {path: 'newauthor', component: NewauthorComponent},
  {path: 'newbook', component: NewbookComponent},
  {path: 'contact', component: ContactComponent}
=======
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
>>>>>>> parent of aee6c246 (updates)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
