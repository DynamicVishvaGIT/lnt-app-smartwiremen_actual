import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassbookPageRoutingModule } from './passbook-routing.module';

import { PassbookPage } from './passbook.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassbookPageRoutingModule,
    TranslateModule
  ],
  declarations: [PassbookPage]
})
export class PassbookPageModule {}
