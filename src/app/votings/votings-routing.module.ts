import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferendumComponent } from './referendum/referendum.component';
import { ReferendumsTableComponent } from './referendums-table/referendums-table.component';
import { VotePreviewComponent } from './vote/vote-preview/vote-preview.component';
import { VoteComponent } from './vote/vote.component';
import { VotingsDashboardComponent } from './votings-dashboard/votings-dashboard.component';
import { VotingsTableComponent } from './votings-table/votings-table.component';

const routes: Routes = [
  // { path: '', component: VotingsDashboardComponent },
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: VotingsDashboardComponent,
      },
      {
        path: 'referendum/:id',
        component: ReferendumComponent,
      },
      {
        path: 'vote',
        component: VoteComponent,
      },
      {
        path: 'preview',
        component: VotePreviewComponent,
      },

      {
        path: 'referendums-list',
        component: ReferendumsTableComponent,
      },
      {
        path: 'votings-list',
        component: VotingsTableComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotingsRoutingModule {}
