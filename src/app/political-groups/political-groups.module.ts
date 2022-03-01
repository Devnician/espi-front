import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { PoliticalGroupTableComponent } from './political-group-table/political-group-table.component';
import { PoliticalGroupsRoutingModule } from './political-groups-routing.module';

@NgModule({
  declarations: [PoliticalGroupTableComponent],
  imports: [
    CommonModule,
    PoliticalGroupsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
})
export class PoliticalGroupsModule {}
