import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent } from './pages/book-list/book-list.component';
import { InsertBookComponent } from './pages/insert-book/insert-book.component';
import { canDeactivateInsertBook } from './deactivate-guards/can-deactivate-insert-book.guard';
import { adminRoleResolver } from './resolvers/admin-role.resolver';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'insert', component: InsertBookComponent,
      canDeactivate: [canDeactivateInsertBook],
      resolve: {
        adminRole: adminRoleResolver
      }
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
