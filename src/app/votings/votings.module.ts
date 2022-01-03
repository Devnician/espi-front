import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { VotingsDashboardComponent } from './votings-dashboard/votings-dashboard.component';
import { VotingsRoutingModule } from './votings-routing.module';

@NgModule({
  declarations: [VotingsDashboardComponent],
  imports: [
    CommonModule,
    VotingsRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
  ],
})
export class VotingsModule {}
