import { Routes } from '@angular/router';

import { changedetectorComponent } from './pages/changedetector/changedetector.component';
import { HomeComponntComponent } from './pages/home-componnt/home-componnt.component';

export const routes: Routes = [
  {
    path: 'book-list',
    loadChildren: () =>
      import('./pages/book-list/book-list.module').then(
        (m) => m.BookListModule
      ),
  },
  {
    path: 'user-list',
    loadChildren: () =>
      import('./pages/user/user-list.module').then((m) => m.UserListModule),
  },
  { path: 'change', component: changedetectorComponent },
  { path: '', pathMatch: 'full', component: HomeComponntComponent },
  { path: '**', pathMatch: 'full', component: HomeComponntComponent },
];
