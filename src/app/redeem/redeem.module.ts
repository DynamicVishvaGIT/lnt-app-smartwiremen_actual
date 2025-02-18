import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemPageRoutingModule } from './redeem-routing.module';

import { RedeemPage } from './redeem.page';
import {TranslateModule} from '@ngx-translate/core';
import { SearchPipeModule } from '../pipes/search-pipe.module';
import { IonBottomSheetModule } from 'ion-bottom-sheet';

@NgModule({
  imports: [
CommonModule,
    FormsModule,
    IonicModule,
    RedeemPageRoutingModule,
    TranslateModule,
    SearchPipeModule,
    IonBottomSheetModule
  ],
  declarations: [RedeemPage,]
})
export class RedeemPageModule {}
