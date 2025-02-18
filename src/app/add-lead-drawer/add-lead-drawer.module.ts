import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLeadDrawerPageRoutingModule } from './add-lead-drawer-routing.module';

import { AddLeadDrawerPage } from './add-lead-drawer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLeadDrawerPageRoutingModule
  ],
  declarations: [AddLeadDrawerPage]
})
export class AddLeadDrawerPageModule {}
