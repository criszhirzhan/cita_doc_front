import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetMedicoPageRoutingModule } from './det-medico-routing.module';

import { DetMedicoPage } from './det-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetMedicoPageRoutingModule
  ],
  declarations: [DetMedicoPage]
})
export class DetMedicoPageModule {}
