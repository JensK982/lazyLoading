import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './book-routing.module';
import { BookListComponent } from './pages/book-list/book-list.component';
import { InsertBookComponent } from './pages/insert-book/insert-book.component';

@NgModule({
  declarations: [BookListComponent, InsertBookComponent],
  imports: [CommonModule, BooksRoutingModule, FormsModule, ReactiveFormsModule],
})
export class BooksModule {}
