import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetPatologiaPageRoutingModule } from './det-patologia-routing.module';

import { DetPatologiaPage } from './det-patologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetPatologiaPageRoutingModule
  ],
  declarations: [DetPatologiaPage]
})
export class DetPatologiaPageModule {}
