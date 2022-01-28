import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetCirugiaPage } from './det-cirugia.page';

const routes: Routes = [
  {
    path: '',
    component: DetCirugiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetCirugiaPageRoutingModule {}
