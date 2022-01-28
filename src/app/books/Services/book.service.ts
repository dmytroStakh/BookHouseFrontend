import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, tap, throwError } from "rxjs";
import {IBook } from "../Models/book";

@Injectable({
    providedIn: 'root'
})

export class BookService
{
  readonly APIUrl="https://localhost:44319/api";
  constructor(private http: HttpClient){}

    getBooks():Observable<IBook[]>
    {
        return this.http.get<IBook[]>(this.APIUrl + '/Books/get_all_books').pipe(
          tap(data => console.log('All', JSON.stringify(data))),
          catchError(this.handleError)
          );
    }

    deleteBook(id: number){
      return this.http.delete(this.APIUrl+'/Books/delete_book/'+id);
    }

    addBook(val:IBook){
      return this.http.post(this.APIUrl+'/Books/add_book',val);
    }

  private handleError(handleError: HttpErrorResponse) {
    console.log('Error');
    return throwError('errorMessage');
  }
}