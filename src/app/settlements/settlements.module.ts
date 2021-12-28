import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { SettlementsRoutingModule } from './settlements-routing.module';
import { SettlementsTableComponent } from './settlements-table/settlements-table.component';

@NgModule({
  declarations: [SettlementsTableComponent],
  imports: [
    CommonModule,
    SettlementsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class SettlementsModule {}
