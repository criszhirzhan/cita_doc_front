import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CirugiaPage } from './cirugia.page';

const routes: Routes = [
  {
    path: '',
    component: CirugiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CirugiaPageRoutingModule {}
