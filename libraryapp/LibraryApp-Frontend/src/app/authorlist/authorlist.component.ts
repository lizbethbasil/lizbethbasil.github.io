import { Component, OnInit } from '@angular/core';
import { AuthorModel } from './author.model';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-authorlist',
  templateUrl: './authorlist.component.html',
  styleUrls: ['./authorlist.component.css']
})
export class AuthorlistComponent implements OnInit {
  title: String = "Author List";
  author: AuthorModel[] | any;
  imageWidth: number = 50;
  imageMargin: number = 2;

  constructor(public authorService: AuthorService) { }

  ngOnInit(): void {
    this.authorService.getAuthor().subscribe((data) => {
      this.author = JSON.parse(JSON.stringify(data));
    })

  }

}
