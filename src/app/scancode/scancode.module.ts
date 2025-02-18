import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScancodePageRoutingModule } from './scancode-routing.module';

import { ScancodePage } from './scancode.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScancodePageRoutingModule,
    TranslateModule
  ],
  declarations: [ScancodePage]
})
export class ScancodePageModule {}
