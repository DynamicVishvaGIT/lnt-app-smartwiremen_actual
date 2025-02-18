import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisclaimermodalPageRoutingModule } from './disclaimermodal-routing.module';

import { DisclaimermodalPage } from './disclaimermodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisclaimermodalPageRoutingModule
  ],
  declarations: [DisclaimermodalPage]
})
export class DisclaimermodalPageModule {}
