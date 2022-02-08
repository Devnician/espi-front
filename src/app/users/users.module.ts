import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersTableComponent } from './users-table/users-table.component';
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
    FormsModule,
    //  MatSnackBarModule,

    // MatButtonModule,
    MatIconModule,
    // MatInputModule,
    // MatSelectModule,
    // MatRadioModule,
    // MatCardModule,

    // ReactiveFormsModule,
    // MatSlideToggleModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,

    // MatSnackBarModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatTooltipModule,
    // MatDatepickerModule,
    // MatNativeDateModule,

    // MatCheckboxModule,
    // MatDividerModule,
    // MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    //ScrollingModule,

    MatButtonModule,
    MatProgressSpinnerModule,

    MatDialogModule,
  ],
})
export class UsersModule {}
