import { Component, OnInit } from '@angular/core';
import { BookModel } from '../booklist/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  title: String = "Book List";
  book: BookModel[] | any;
  imageWidth: number = 50;
  imageMargin: number = 2;

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBook().subscribe((data) => {
      this.book = JSON.parse(JSON.stringify(data));
    })

  }
}
