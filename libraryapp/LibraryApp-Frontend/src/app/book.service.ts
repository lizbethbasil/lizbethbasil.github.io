import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(public http: HttpClient) { }
  getBook() {
    return this.http.get('http://localhost:5000/booklist');
  }


  addBook(item: any) {
    return this.http.post('http://localhost:5000/newbook', { item }).subscribe(data => { console.log(data) });
  }
}
