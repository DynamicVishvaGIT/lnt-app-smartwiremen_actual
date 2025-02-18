import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisclaimermodalPage } from './disclaimermodal.page';

const routes: Routes = [
  {
    path: '',
    component: DisclaimermodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisclaimermodalPageRoutingModule {}
