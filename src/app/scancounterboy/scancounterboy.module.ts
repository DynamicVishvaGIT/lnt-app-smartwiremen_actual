import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ScancounterboyPageRoutingModule } from './scancounterboy-routing.module';
import { ScancounterboyPage } from './scancounterboy.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScancounterboyPageRoutingModule,
    TranslateModule
  ],
  declarations: [ScancounterboyPage]
})
export class ScancounterboyPageModule {}
