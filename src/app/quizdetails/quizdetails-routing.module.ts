import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizdetailsPage } from './quizdetails.page';

const routes: Routes = [
  {
    path: '',
    component: QuizdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizdetailsPageRoutingModule {}
