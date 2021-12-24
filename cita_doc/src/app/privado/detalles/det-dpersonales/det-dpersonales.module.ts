import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetDpersonalesPageRoutingModule } from './det-dpersonales-routing.module';

import { DetDpersonalesPage } from './det-dpersonales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetDpersonalesPageRoutingModule
  ],
  declarations: [DetDpersonalesPage]
})
export class DetDpersonalesPageModule {}
