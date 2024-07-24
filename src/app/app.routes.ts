import { Routes } from '@angular/router';

import { HomeComponentComponent } from './pages/home-componnt/home-componnt.component';

export const routes: Routes = [
  {
    path: 'books',
    loadChildren: () =>
      import('./modules/books/books.module').then(
        (m) => m.BooksModule
      ),
  },
  {
    path: 'change',
    loadChildren: () =>
      import('./modules/change-detector/change-detector.module').then(
        (m) => m.ChangeDetectorModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/user/user-list.module').then((m) => m.UserListModule),
  },

  { path: '', pathMatch: 'full', component: HomeComponentComponent },
  { path: '**', pathMatch: 'full', component: HomeComponentComponent },
];
