import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomOtpInputComponent } from '../custom-otp-input/custom-otp-input.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    CustomOtpInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports:[
    CustomOtpInputComponent
  ]
})
export class ShareModule { }
