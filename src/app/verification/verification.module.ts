import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificationPageRoutingModule } from './verification-routing.module';

import { VerificationPage } from './verification.page';
import {TranslateModule} from '@ngx-translate/core';
import { NgOtpInputModule } from 'ng-otp-input';
import { ShareModule } from '../share/share.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificationPageRoutingModule,
    TranslateModule,
    ShareModule
    // NgOtpInputModule
  ],
  declarations: [VerificationPage]
})
export class VerificationPageModule {}
