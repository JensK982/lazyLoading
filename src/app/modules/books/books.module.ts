import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './book-routing.module';
import { BookListComponent } from './pages/book-list/book-list.component';

@NgModule({
  declarations: [BookListComponent],
  imports: [CommonModule, BooksRoutingModule, ReactiveFormsModule],
})
export class BooksModule {}
