import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersTableComponent } from './orders-table/orders-table.component';

@NgModule({
  declarations: [OrdersTableComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
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
export class OrdersModule {}
