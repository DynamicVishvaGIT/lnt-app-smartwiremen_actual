import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchemeDetailPageRoutingModule } from './scheme-detail-routing.module';

import { SchemeDetailPage } from './scheme-detail.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchemeDetailPageRoutingModule,
    TranslateModule
  ],
  declarations: [SchemeDetailPage]
})
export class SchemeDetailPageModule {}
