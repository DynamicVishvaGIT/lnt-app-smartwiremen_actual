import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScancounterboyPage } from './scancounterboy.page';

const routes: Routes = [
  {
    path: '',
    component: ScancounterboyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScancounterboyPageRoutingModule {}
