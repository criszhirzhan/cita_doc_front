import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CirugiaPageRoutingModule } from './cirugia-routing.module';

import { CirugiaPage } from './cirugia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CirugiaPageRoutingModule
  ],
  declarations: [CirugiaPage]
})
export class CirugiaPageModule {}
