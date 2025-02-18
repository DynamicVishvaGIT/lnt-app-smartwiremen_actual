import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectLeadPageRoutingModule } from './project-lead-routing.module';

import { ProjectLeadPage } from './project-lead.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectLeadPageRoutingModule,
    TranslateModule
  ],
  declarations: [ProjectLeadPage]
})
export class ProjectLeadPageModule {}
