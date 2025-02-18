import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcounterboyPageRoutingModule } from './addcounterboy-routing.module';

import { AddcounterboyPage } from './addcounterboy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcounterboyPageRoutingModule
  ],
  declarations: [AddcounterboyPage]
})
export class AddcounterboyPageModule {}
