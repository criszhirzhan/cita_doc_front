import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatologiaPageRoutingModule } from './patologia-routing.module';

import { PatologiaPage } from './patologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatologiaPageRoutingModule
  ],
  declarations: [PatologiaPage]
})
export class PatologiaPageModule {}
