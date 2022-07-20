import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { AboutComponent } from './about/about.component';
import { BooklistComponent } from './booklist/booklist.component';
import { AuthorlistComponent } from './authorlist/authorlist.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { NewbookComponent } from './newbook/newbook.component';
import { ContactComponent } from './contact/contact.component';
=======
import { BooklistComponent } from './booklist/booklist.component';
import { NewbookComponent } from './newbook/newbook.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
>>>>>>> parent of aee6c246 (updates)

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
<<<<<<< HEAD
    AboutComponent,
    BooklistComponent,
    AuthorlistComponent,
    NewauthorComponent,
    NewbookComponent,
    ContactComponent
=======
    BooklistComponent,
    NewbookComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent
>>>>>>> parent of aee6c246 (updates)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
