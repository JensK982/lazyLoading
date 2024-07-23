import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { userlistComponent } from './user-list.component';

const routes: Routes = [{ path: '', component: userlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserListRoutingModule {}
