import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { PoliticalGroupsTableComponent } from './political-group-table/political-groups-table.component';
import { PoliticalGroupsRoutingModule } from './political-groups-routing.module';

@NgModule({
  declarations: [
    PoliticalGroupsTableComponent,
    PoliticalGroupMembersTableComponent,
    EditPoliticalGroupComponent,
    AddPoliticalGroupMemberComponent,
  ],
  imports: [
    CommonModule,
    PoliticalGroupsRoutingModule,
    MatDialogModule,
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
    MatMenuModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
  ],
})
export class PoliticalGroupsModule {}
