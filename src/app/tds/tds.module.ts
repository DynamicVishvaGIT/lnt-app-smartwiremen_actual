import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TdsPageRoutingModule } from './tds-routing.module';

import { TdsPage } from './tds.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TdsPageRoutingModule,
    TranslateModule
  ],
  declarations: [TdsPage]
})
export class TdsPageModule {}
