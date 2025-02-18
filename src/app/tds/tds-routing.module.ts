import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TdsPage } from './tds.page';

const routes: Routes = [
  {
    path: '',
    component: TdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TdsPageRoutingModule {}
