import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchemePageRoutingModule } from './scheme-routing.module';

import { SchemePage } from './scheme.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchemePageRoutingModule,
    TranslateModule
  ],
  declarations: [SchemePage]
})
export class SchemePageModule {}
