import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetMedicoPage } from './det-medico.page';

const routes: Routes = [
  {
    path: '',
    component: DetMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetMedicoPageRoutingModule {}
