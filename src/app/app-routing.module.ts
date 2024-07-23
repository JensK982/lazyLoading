import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { routes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
