import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { changeDetectorRoutes } from './change-detector.routing';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { ChangeDetectorComponent } from './pages/change-detector/change-detector.component';

@NgModule({
  declarations: [ChangeDetectorComponent, Child1Component, Child2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(changeDetectorRoutes),
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChangeDetectorModule {}
