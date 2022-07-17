import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../booklist/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {
  title: String = "New Book";
  newbook = new BookModel(0, "", "", "", 0, "");

  constructor(public bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  NewBook() {
    this.bookService.addBook(this.newbook);
    alert("New Book Added");
    this.router.navigate(['/']);
  }
}
