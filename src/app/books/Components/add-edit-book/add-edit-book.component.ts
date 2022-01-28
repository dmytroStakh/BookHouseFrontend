import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from '../../Models/book';
import { BookService } from '../../Services/book.service';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent implements OnInit {
  constructor(private bookService: BookService,  private router: Router) { }

  @Input() book:IBook | undefined;

  bookId!: number;
  BookTitle!: string;
  BookAuthor!: string;

  ngOnInit(): void {
  }

  addBook(): void{
    var newBook = {id: this.bookId,
                  title: this.BookTitle,
                  author: this.BookAuthor,
                  bookCopies: null
                };

    this.bookService.addBook(newBook).subscribe();

    this.router.navigate(['/book']);
  }

}
