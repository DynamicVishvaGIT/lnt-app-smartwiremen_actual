import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KycaPage } from './kyca.page';

const routes: Routes = [
  {
    path: '',
    component: KycaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KycaPageRoutingModule {}
