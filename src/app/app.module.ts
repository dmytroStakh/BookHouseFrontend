import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/Components/book-list/book-list.component';
import { MainNavbarComponent } from './shared/main-navbar/main-navbar.component';
import { AddEditBookComponent } from './books/Components/add-edit-book/add-edit-book.component';
import { FormsModule } from '@angular/forms';
import { BookCopyComponent } from './book-copies/Components/book-copy/book-copy.component';
import { AddEditBookCopyComponent } from './book-copies/Components/add-edit-book-copy/add-edit-book-copy.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    MainNavbarComponent,
    AddEditBookComponent,
    BookCopyComponent,
    AddEditBookCopyComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
