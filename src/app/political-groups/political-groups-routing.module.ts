import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticalGroupMembersTableComponent } from './political-group-members-table/political-group-members-table.component';
import { PoliticalGroupsTableComponent } from './political-group-table/political-groups-table.component';

const routes: Routes = [
  {
    path: '',
    component: PoliticalGroupsTableComponent,
  },
  {
    path: 'members',
    component: PoliticalGroupMembersTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticalGroupsRoutingModule {}
