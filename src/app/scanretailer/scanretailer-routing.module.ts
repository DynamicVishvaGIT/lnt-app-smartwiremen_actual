import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanretailerPage } from './scanretailer.page';

const routes: Routes = [
  {
    path: '',
    component: ScanretailerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanretailerPageRoutingModule {}
