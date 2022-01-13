import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ReferendumComponent } from './referendum/referendum.component';
import { ChildTableComponent } from './vote/child/child-table/child-table.component';
import { ChildComponent } from './vote/child/child.component';
import { ParentComponent } from './vote/parent/parent.component';
import { VoteComponent } from './vote/vote.component';
import { VotingsDashboardComponent } from './votings-dashboard/votings-dashboard.component';
import { VotingsRoutingModule } from './votings-routing.module';
@NgModule({
  declarations: [
    VotingsDashboardComponent,
    ReferendumComponent,
    VoteComponent,
    ParentComponent,
    ChildComponent,
    ChildTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VotingsRoutingModule,
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
  ],
})
export class VotingsModule {}
