import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetPatologiaPage } from './det-patologia.page';

const routes: Routes = [
  {
    path: '',
    component: DetPatologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetPatologiaPageRoutingModule {}
