import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Votings } from 'src/generated/graphql';
import { VotingsService } from '../voting-service.service';
import { VotingsTableDataSource } from './votings-table-datasource';

@Component({
  selector: 'app-votings-table',
  templateUrl: './votings-table.component.html',
  styleUrls: ['./votings-table.component.scss'],
})
export class VotingsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Votings>;
  dataSource: VotingsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(
    private votingService: VotingsService,
    private matSnackBar: MatSnackBar
  ) {
    this.dataSource = new VotingsTableDataSource(votingService, matSnackBar);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
