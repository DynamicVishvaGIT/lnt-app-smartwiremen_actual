import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {TranslateModule} from '@ngx-translate/core';
import { IonicSelectableModule } from 'ionic-selectable';
import { DatePickerModule } from 'ionic4-date-picker';


@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    DatePickerModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
