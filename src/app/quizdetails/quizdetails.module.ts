import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizdetailsPageRoutingModule } from './quizdetails-routing.module';

import { QuizdetailsPage } from './quizdetails.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizdetailsPageRoutingModule,
    TranslateModule
  ],
  declarations: [QuizdetailsPage]
})
export class QuizdetailsPageModule {}
