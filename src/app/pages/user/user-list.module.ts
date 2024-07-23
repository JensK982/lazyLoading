import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserListRoutingModule } from './user-list-routing.module';
import { userlistComponent } from './user-list.component';

@NgModule({
  declarations: [userlistComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserListRoutingModule,
    ReactiveFormsModule,
  ],
})
export class UserListModule {}
