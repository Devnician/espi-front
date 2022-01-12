import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { ReferendumComponent } from './referendum/referendum.component';
import { VoteComponent } from './vote/vote.component';
import { VotingsDashboardComponent } from './votings-dashboard/votings-dashboard.component';
import { VotingsRoutingModule } from './votings-routing.module';
@NgModule({
  declarations: [VotingsDashboardComponent, ReferendumComponent, VoteComponent],
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
  ],
})
export class VotingsModule {}
