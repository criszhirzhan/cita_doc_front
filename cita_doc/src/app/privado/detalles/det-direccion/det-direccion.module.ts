import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetDireccionPageRoutingModule } from './det-direccion-routing.module';

import { DetDireccionPage } from './det-direccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetDireccionPageRoutingModule
  ],
  declarations: [DetDireccionPage]
})
export class DetDireccionPageModule {}
