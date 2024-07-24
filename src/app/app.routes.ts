import { Routes } from '@angular/router';

import { HomeComponentComponent } from './pages/home-componnt/home-componnt.component';
import { isSupervisorGuard } from './guards/is-supervisor.guard';
import { isAdminGuard } from './guards/is-admin.guard';
import { isSupervisorOrAdminGuard } from './guards/is-supervisor-or-admin.guard';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponentComponent },
  {
    // Dürfen alle
    path: 'change',
    loadChildren: () =>
      import('./modules/change-detector/change-detector.module').then(
        (m) => m.ChangeDetectorModule
      ),
      canActivate: [],
  },
  {
    // Dürfen nur Supervisor oder admin zugreifen
    path: 'books',
    loadChildren: () =>
      import('./modules/books/books.module').then(
        (m) => m.BooksModule
      ),
    canActivate: [isSupervisorOrAdminGuard]
  },
  {
    // Dürfen nur admin zugreifen
    path: 'users',
    loadChildren: () =>
      import('./pages/user/user-list.module').then((m) => m.UserListModule),
    canActivate: [isAdminGuard]
  },

  { path: 'error/:errorCode', component: ErrorPageComponent },
  { path: '**', redirectTo: 'error/404'},
];
