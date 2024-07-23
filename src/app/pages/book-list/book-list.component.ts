import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { bookmodel } from './Model/book.model';
import { isbnValidator } from './Validator/book.Validator';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  protected bookModule = new bookmodel();
  protected formGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    isbn: new FormControl('', [isbnValidator()]),
    date: new FormControl(),
    street: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    version: new FormControl(),
    versionDate: new FormControl(),
  });

  constructor() {
    this.bookModule.title = 'Learning of Angular as a dummy';
    this.bookModule.description =
      'A Story of a stupid guy how would like to learn programming.';
    this.bookModule.author = 'Jens Kühnler';
    this.bookModule.isbn = '0-0000-0000-0';
    this.bookModule.date = new Date();
    this.bookModule.address.city = 'Esslingen';
    this.bookModule.address.street = 'Bismarckstrasse';
    this.bookModule.versions.version = '0.0';
    this.bookModule.versions.date = new Date();

    // Set the form control values
    this.formGroup.setValue({
      title: this.bookModule.title,
      description: this.bookModule.description,
      author: this.bookModule.author,
      isbn: this.bookModule.isbn,
      date: this.bookModule.date,
      street: this.bookModule.address.street,
      city: this.bookModule.address.city,
      version: this.bookModule.versions.version,
      versionDate: this.bookModule.versions.date,
    });
  }

  updateValues() {
    if (this.formGroup.controls.title.value) {
      this.bookModule.title = this.formGroup.controls.title.value;
    }
    if (this.formGroup.controls.description.value) {
      this.bookModule.description = this.formGroup.controls.description.value;
    }
    if (this.formGroup.controls.author.value) {
      this.bookModule.author = this.formGroup.controls.author.value;
    }
    if (this.formGroup.controls.isbn.value) {
      this.bookModule.isbn = this.formGroup.controls.isbn.value;
    }
    if (this.formGroup.controls.date.value) {
      this.bookModule.date = this.formGroup.controls.date.value;
    }
    if (this.formGroup.controls.street.value) {
      this.bookModule.address.street = this.formGroup.controls.street.value;
    }
    if (this.formGroup.controls.city.value) {
      this.bookModule.address.city = this.formGroup.controls.city.value;
    }
    if (this.formGroup.controls.version.value) {
      this.bookModule.versions.version = this.formGroup.controls.version.value;
    }
    if (this.formGroup.controls.versionDate.value) {
      this.bookModule.versions.date = this.formGroup.controls.versionDate.value;
    }
  }
}
