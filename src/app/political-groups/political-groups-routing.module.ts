import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticalGroupMembersTableComponent } from './political-group-members-table/political-group-members-table.component';
import { PoliticalGroupTableComponent } from './political-group-table/political-group-table.component';

const routes: Routes = [
  {
    path: '',
    component: PoliticalGroupTableComponent,
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
