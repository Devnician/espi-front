import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { rowsAnimation } from 'src/app/animations/template.animations';
import { Donkey } from 'src/app/services/donkey.service';
import {
  Political_Groups,
  Political_Group_Members,
} from 'src/generated/graphql';
import { PoliticalGroupsService } from '../political-groups-service';
import { PoliticalGroupMembersTableDataSource } from './political-group-members-table-datasource';

@Component({
  selector: 'app-political-group-members-table',
  templateUrl: './political-group-members-table.component.html',
  styleUrls: ['./political-group-members-table.component.scss'],
  animations: [rowsAnimation],
})
export class PoliticalGroupMembersTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Political_Group_Members>;
  dataSource: PoliticalGroupMembersTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'egn',
    'name',
    'surname',
    'family',
    'active',
    'actions',
  ];
  politicalGroup: Political_Groups;

  constructor(
    private politicalGroupsService: PoliticalGroupsService,
    private snackBar: MatSnackBar,
    private donkey: Donkey,
    private router: Router
  ) {
    this.dataSource = new PoliticalGroupMembersTableDataSource(
      politicalGroupsService,
      snackBar
    );
    if (donkey.isLoaded()) {
      try {
        this.politicalGroup = donkey.unload().pGroup;
        this.dataSource.condition.next({
          politicalGroupId: { _eq: this.politicalGroup.id },
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (!this.politicalGroup) {
      this.router.navigate(['political-groups']);
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  addMember() {
    // TODO - open dialog for searching for non-party users ...
    alert('OPEN DIALOG ....');
  }
  removeMember(member: Political_Group_Members) {
    console.log(member);
  }
}
