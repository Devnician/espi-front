import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { rowsAnimation } from 'src/app/animations/template.animations';
import { Political_Groups } from 'src/generated/graphql';
import { PoliticalGroupsService } from '../political-groups-service';
import { PoliticalGroupTableDataSource } from './political-group-table-datasource';

@Component({
  selector: 'app-political-group-table',
  templateUrl: './political-group-table.component.html',
  styleUrls: ['./political-group-table.component.scss'],
  animations: [rowsAnimation],
})
export class PoliticalGroupTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Political_Groups>;
  dataSource: PoliticalGroupTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'createdAt',
    'updatedAt',
    'type',
    'name',
    'description',
  ];

  constructor(
    private politicalGroupsService: PoliticalGroupsService,
    private snackBar: MatSnackBar
  ) {
    this.dataSource = new PoliticalGroupTableDataSource(
      politicalGroupsService,
      snackBar
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  editPoliticalGroup(group: Political_Groups) {
    console.log(group);
    alert('NIY');
  }
}
