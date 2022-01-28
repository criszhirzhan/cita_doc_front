import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetCirugiaPageRoutingModule } from './det-cirugia-routing.module';

import { DetCirugiaPage } from './det-cirugia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetCirugiaPageRoutingModule
  ],
  declarations: [DetCirugiaPage]
})
export class DetCirugiaPageModule {}
