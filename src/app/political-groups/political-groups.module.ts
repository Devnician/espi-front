import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AddPoliticalGroupMemberComponent } from './add-political-group-member/add-political-group-member.component';
import { EditPoliticalGroupComponent } from './edit-political-group/edit-political-group.component';
import { PoliticalGroupMembersTableComponent } from './political-group-members-table/political-group-members-table.component';
import { PoliticalGroupTableComponent } from './political-group-table/political-group-table.component';
import { PoliticalGroupsRoutingModule } from './political-groups-routing.module';

@NgModule({
  declarations: [
    PoliticalGroupTableComponent,
    PoliticalGroupMembersTableComponent,
    EditPoliticalGroupComponent,
    AddPoliticalGroupMemberComponent,
  ],
  imports: [
    CommonModule,
    PoliticalGroupsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
  ],
})
export class PoliticalGroupsModule {}
