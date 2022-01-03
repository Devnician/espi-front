import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotingsDashboardComponent } from './votings-dashboard/votings-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: VotingsDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotingsRoutingModule {}
