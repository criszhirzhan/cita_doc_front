import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetCitaPageRoutingModule } from './det-cita-routing.module';

import { DetCitaPage } from './det-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetCitaPageRoutingModule
  ],
  declarations: [DetCitaPage]
})
export class DetCitaPageModule {}
