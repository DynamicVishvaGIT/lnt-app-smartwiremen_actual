import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KycaPageRoutingModule } from './kyca-routing.module';

import { KycaPage } from './kyca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KycaPageRoutingModule
  ],
  declarations: [KycaPage]
})
export class KycaPageModule {}
