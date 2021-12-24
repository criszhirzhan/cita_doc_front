import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctoresPageRoutingModule } from './doctores-routing.module';

import { DoctoresPage } from './doctores.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctoresPageRoutingModule, Ng2SearchPipeModule
  ],
  declarations: [DoctoresPage]
})
export class DoctoresPageModule {}
