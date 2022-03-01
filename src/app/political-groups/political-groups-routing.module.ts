import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticalGroupTableComponent } from './political-group-table/political-group-table.component';

const routes: Routes = [
  {
    path: '',
    component: PoliticalGroupTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticalGroupsRoutingModule {}
