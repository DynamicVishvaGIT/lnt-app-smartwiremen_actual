import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLeadDrawerPage } from './add-lead-drawer.page';

const routes: Routes = [
  {
    path: '',
    component: AddLeadDrawerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLeadDrawerPageRoutingModule {}
