import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditBookCopyComponent } from './book-copies/Components/add-edit-book-copy/add-edit-book-copy.component';
import { BookCopyComponent } from './book-copies/Components/book-copy/book-copy.component';
import { AddEditBookComponent } from './books/Components/add-edit-book/add-edit-book.component';
import { BookListComponent } from './books/Components/book-list/book-list.component';

const routes: Routes = [
  {path:'book', component:BookListComponent},
  {path:'book-copy', component:BookCopyComponent},
  {path:'add-edit-book', component:AddEditBookComponent},
  {path:'add-edit-book-copy', component:AddEditBookCopyComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
