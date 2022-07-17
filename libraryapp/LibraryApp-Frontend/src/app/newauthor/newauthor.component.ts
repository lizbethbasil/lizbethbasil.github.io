import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from '../authorlist/author.model';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {
  title: String = "New Author";
  newauthor = new AuthorModel("", "", 0, "");

  constructor(public authorService: AuthorService, private router: Router) { }

  ngOnInit(): void {
  }

  NewAuthor() {
    this.authorService.addAuthor(this.newauthor);
    alert("New Author Added");
    this.router.navigate(['/']);
  }
}
