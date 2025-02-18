import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectLeadPage } from './project-lead.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectLeadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectLeadPageRoutingModule {}
