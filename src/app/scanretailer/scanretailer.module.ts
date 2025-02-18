import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanretailerPageRoutingModule } from './scanretailer-routing.module';

import { ScanretailerPage } from './scanretailer.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanretailerPageRoutingModule,
    TranslateModule
  ],
  declarations: [ScanretailerPage]
})
export class ScanretailerPageModule {}
