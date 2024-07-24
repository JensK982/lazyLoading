export class bookmodel {
  title: string = '';
  description: string = '';
  author: string = '';
  isbn: string = '';
  date: Date | undefined;
  address = new BookAddress();
  versions = new BookVersion();
}

export class BookAddress {
  street: string = '';
  city: string = '';
}

export class BookVersion {
  version: string = '';
  date: Date | undefined;
}
