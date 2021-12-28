import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotingSectionsTableComponent } from './voting-sections-table/voting-sections-table.component';

const routes: Routes = [
  {
    path: '',
    component: VotingSectionsTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotingSectionsRoutingModule {}
