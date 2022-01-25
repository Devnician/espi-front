import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { UsersRoutingModule } from './users-routing.module';
import { UsersTableComponent } from './users-table/users-table.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [UsersTableComponent, EditUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,

    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatCheckboxModule,
    NgxJsonViewerModule,

    //  MatSnackBarModule,

    // MatButtonModule,
    MatIconModule,
    // MatInputModule,
    // MatSelectModule,
    // MatRadioModule,
    // MatCardModule,
    // MatAutocompleteModule,
    // ReactiveFormsModule,
    // MatSlideToggleModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
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
