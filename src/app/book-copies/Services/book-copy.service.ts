import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { IBookCopy } from '../Models/IBookCopy';
import { IBookCopyData } from '../Models/IBookCopyData';

@Injectable({
  providedIn: 'root'
})
export class BookCopyService {

  readonly APIUrl="https://localhost:44319/api";
  constructor(private http: HttpClient){}

  getBookCopies():Observable<IBookCopy[]>
  {
      return this.http.get<IBookCopy[]>(this.APIUrl + '/BookCopies/get_all_books_copies').pipe();
  }

  deleteBookCopy(id: number){
    return this.http.delete(this.APIUrl+'/BookCopies/delete_book_copy/'+id);
  }

  addBookCopy(val:IBookCopyData){
    return this.http.post(this.APIUrl+'/BookCopies/add_book_copy',val);
  }

  updateBookCopy(val:IBookCopyData){
    return this.http.post(this.APIUrl+'/BookCopies/edit_book_copy',val);
  }
}
