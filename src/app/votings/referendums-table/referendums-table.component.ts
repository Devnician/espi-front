import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Referendums } from 'src/generated/graphql';
import { VotingsService } from '../voting-service.service';
import { ReferendumsTableDataSource } from './referendums-table-datasource';

@Component({
  selector: 'app-referendums-table',
  templateUrl: './referendums-table.component.html',
  styleUrls: ['./referendums-table.component.scss'],
})
export class ReferendumsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Referendums>;
  dataSource: ReferendumsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(
    private votingService: VotingsService,
    private matSnackBar: MatSnackBar
  ) {
    this.dataSource = new ReferendumsTableDataSource(
      votingService,
      matSnackBar
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
