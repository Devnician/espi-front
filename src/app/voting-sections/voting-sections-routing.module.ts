import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionMembersTableComponent } from './section-members-table/section-members-table.component';
import { VotingSectionsTableComponent } from './voting-sections-table/voting-sections-table.component';

const routes: Routes = [
  {
    path: '',
    component: VotingSectionsTableComponent,
  },
  {
    path: 'members',
    component: SectionMembersTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotingSectionsRoutingModule {}
