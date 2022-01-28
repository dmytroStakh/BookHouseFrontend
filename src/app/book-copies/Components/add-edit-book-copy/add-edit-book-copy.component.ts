import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'src/app/books/Models/book';
import { BookService } from 'src/app/books/Services/book.service';
import { IBookCopyData } from '../../Models/IBookCopyData';
import { BookCopyService } from '../../Services/book-copy.service';

@Component({
  selector: 'app-add-edit-book-copy',
  templateUrl: './add-edit-book-copy.component.html',
  styleUrls: ['./add-edit-book-copy.component.css']
})
export class AddEditBookCopyComponent implements OnInit {
  constructor(private bookCopyService: BookCopyService, private bookService: BookService,  private router: Router) { }

  @Input() editBookCopy!:IBookCopyData;

  id!: number;
  isReserved!: boolean;
  isArchived!: boolean;
  bookId!: number;

  BooksList:IBook[]=[];


  ngOnInit(): void {
    this.loadBookList();
  }

  loadBookList(){
    this.bookService.getBooks().subscribe((data:any)=>{
      this.BooksList=data;

      this.id = this.id,
      this.isReserved = this.editBookCopy.isReserved,
      this.isArchived = this.editBookCopy.isArchived,
      this.bookId = this.editBookCopy.bookId
    });
  }

  addBookCopy(): void{
    var newBookCopy = {
                  id : this.id,
                  isReserved : this.isReserved,
                  isArchived :this.isArchived,
                  bookId: this.bookId            };

    this.bookCopyService.addBookCopy(newBookCopy).subscribe();

    this.router.navigate(['/book-copy']);
  }

  // updateBookCopy(): void{
  //   var newBookCopy = {
  //                 id : this.id,
  //                 isReserved : this.isReserved,
  //                 isArchived :this.isArchived,
  //                 bookId: this.bookId            };

  //   this.bookCopyService.updateBookCopy(newBookCopy).subscribe();

  //   this.router.navigate(['/book-copy']);
  // }


}
