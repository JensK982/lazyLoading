import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BookListRoutingModule } from './book-list-routing.module';
import { BookListComponent } from './book-list.component';

@NgModule({
  declarations: [BookListComponent],
  imports: [CommonModule, BookListRoutingModule, ReactiveFormsModule],
})
export class BookListModule {}
