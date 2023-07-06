import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AcercadeComponent } from './acercade.component';

const routes: Routes = [
  {
    path: '',
    component: AcercadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcercaRoutingModule { }