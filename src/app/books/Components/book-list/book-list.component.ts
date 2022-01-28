import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBook } from '../../Models/book';
import { BookService } from '../../Services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  pageTitle: string = 'All Books';
  errorMessage: string = '';
  sub!: Subscription;
  
  constructor(private bookService: BookService) { }

  bookList: IBook[] =[];

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }

  ngOnInit(): void 
  {
    this.sub = this.bookService.getBooks().subscribe({
      next: bookList =>{
        console.log(bookList);
        this.bookList = bookList;
        console.log(this.bookList);
      }, 
      error: err => this.errorMessage = err
      
    });
  }

  deleteBook(book : IBook){
    if(confirm('Are you sure??')){
      this.bookService.deleteBook(book.id).subscribe(data=>{
        this.refreshBookList();
      })
    }
  }
  
  refreshBookList() {
    this.bookService.getBooks().subscribe(data=>{
      this.bookList=data;
    });
  }

}
