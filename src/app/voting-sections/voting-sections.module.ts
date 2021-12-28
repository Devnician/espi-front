import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { VotingSectionsRoutingModule } from './voting-sections-routing.module';
import { VotingSectionsTableComponent } from './voting-sections-table/voting-sections-table.component';

@NgModule({
  declarations: [VotingSectionsTableComponent],
  imports: [
    CommonModule,
    VotingSectionsRoutingModule,
    MatTableModule,
    MatPaginatorModule,

    MatSortModule,
  ],
})
export class VotingSectionsModule {}
