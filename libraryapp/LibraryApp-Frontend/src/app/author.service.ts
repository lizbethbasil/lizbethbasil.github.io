import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(public http: HttpClient) { }
  getAuthor() {
    return this.http.get('http://localhost:3000/author');
  }


  addAuthor(item: any) {

    return this.http.post('http://localhost:3000/addauthor', { item }).subscribe(data => { console.log(data) });
  }
}
