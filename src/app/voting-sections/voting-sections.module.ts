import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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
    MatSnackBarModule,
    MatProgressBarModule,
    MatMenuModule,

    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class VotingSectionsModule {}
