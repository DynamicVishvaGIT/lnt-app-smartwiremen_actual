import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaldisclaimerPage } from './modaldisclaimer.page';

const routes: Routes = [
  {
    path: '',
    component: ModaldisclaimerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaldisclaimerPageRoutingModule {}
