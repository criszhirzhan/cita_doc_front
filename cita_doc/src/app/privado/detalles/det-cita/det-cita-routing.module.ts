import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetCitaPage } from './det-cita.page';

const routes: Routes = [
  {
    path: '',
    component: DetCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetCitaPageRoutingModule {}
