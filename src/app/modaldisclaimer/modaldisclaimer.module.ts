import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaldisclaimerPageRoutingModule } from './modaldisclaimer-routing.module';

import { ModaldisclaimerPage } from './modaldisclaimer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaldisclaimerPageRoutingModule
  ],
  declarations: [ModaldisclaimerPage]
})
export class ModaldisclaimerPageModule {}
