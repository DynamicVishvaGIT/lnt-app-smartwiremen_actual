import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KycPageRoutingModule } from './kyc-routing.module';

import { KycPage } from './kyc.page';
import {TranslateModule} from '@ngx-translate/core';
import { IonicSelectableModule } from 'ionic-selectable';
import { DatePickerModule } from 'ionic4-date-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    DatePickerModule,
    KycPageRoutingModule
  ],
  declarations: [KycPage]
})
export class KycPageModule {}
