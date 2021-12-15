import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { UsersRoutingModule } from './users-routing.module';
import { UsersTableComponent } from './users-table/users-table.component';

@NgModule({
  declarations: [UsersTableComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressBarModule,

    //  MatSnackBarModule,

    // MatButtonModule,
    // MatIconModule,
    // MatInputModule,
    // MatSelectModule,
    // MatRadioModule,
    // MatCardModule,
    // MatAutocompleteModule,
    // ReactiveFormsModule,
    // MatSlideToggleModule,
    // MatMenuModule,
    // MatDialogModule,
    // MatSnackBarModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatTooltipModule,
    // MatDatepickerModule,
    // MatNativeDateModule,

    // MatCheckboxModule,
    // MatDividerModule,
    // MatGridListModule,
  ],
})
export class UsersModule {}
