import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatologiaPage } from './patologia.page';

const routes: Routes = [
  {
    path: '',
    component: PatologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatologiaPageRoutingModule {}
