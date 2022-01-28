import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBookCopy } from '../../Models/IBookCopy';
import { BookCopyService } from '../../Services/book-copy.service';

@Component({
  selector: 'app-book-copy',
  templateUrl: './book-copy.component.html',
  styleUrls: ['./book-copy.component.css']
})
export class BookCopyComponent implements OnInit {
  pageTitle: string = 'All Book Copies';
  errorMessage: string = '';
  sub!: Subscription;
  
  constructor(private bookCopyService: BookCopyService) { }

  bookCopyList: IBookCopy[] =[];

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }

  ngOnInit(): void 
  {
    this.sub = this.bookCopyService.getBookCopies().subscribe({
      next: bookCopyList =>{
        console.log(bookCopyList);
        this.bookCopyList = bookCopyList;
        console.log(this.bookCopyList);
      }, 
      error: err => this.errorMessage = err
      
    });
  }
  deleteBookCopy(book : IBookCopy){
    if(confirm('Are you sure??')){
      this.bookCopyService.deleteBookCopy(book.id).subscribe(data=>{
        this.refreshBookList();
      })
    }
  }
  
  refreshBookList() {
    this.bookCopyService.getBookCopies().subscribe(data=>{
      this.bookCopyList=data;
    });
  }
}
