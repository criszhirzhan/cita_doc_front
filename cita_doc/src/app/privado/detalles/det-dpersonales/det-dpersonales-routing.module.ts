import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetDpersonalesPage } from './det-dpersonales.page';

const routes: Routes = [
  {
    path: '',
    component: DetDpersonalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetDpersonalesPageRoutingModule {}
