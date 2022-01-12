import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferendumComponent } from './referendum/referendum.component';
import { VoteComponent } from './vote/vote.component';
import { VotingsDashboardComponent } from './votings-dashboard/votings-dashboard.component';

const routes: Routes = [
  // { path: '', component: VotingsDashboardComponent },
  {
    path: '',
    children: [
      {
        path: '',
        component: VotingsDashboardComponent,
      },
      {
        path: 'referendum',
        component: ReferendumComponent,
      },
      {
        path: 'vote',
        component: VoteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotingsRoutingModule {}
