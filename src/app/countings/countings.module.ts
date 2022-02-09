import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CountingsDashboardComponent } from './countings-dashboard/countings-dashboard.component';
import { CountingsRoutingModule } from './countings-routing.module';

@NgModule({
  declarations: [
    CountingsDashboardComponent
  ],
  imports: [
    //TODO: Clear not needed imports
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CountingsRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatStepperModule,
    MatFormFieldModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatAutocompleteModule,

    // MatProgressSpinnerModule,

    MatDialogModule,
    MatMomentDateModule,
    MatDatepickerModule,
  ],
  providers: [MatDatepickerModule, MatMomentDateModule],
})
export class CountingsModule { }
