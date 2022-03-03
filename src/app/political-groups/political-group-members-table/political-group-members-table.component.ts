import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PoliticalGroupMembersTableDataSource, PoliticalGroupMembersTableItem } from './political-group-members-table-datasource';

@Component({
  selector: 'app-political-group-members-table',
  templateUrl: './political-group-members-table.component.html',
  styleUrls: ['./political-group-members-table.component.scss']
})
export class PoliticalGroupMembersTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<PoliticalGroupMembersTableItem>;
  dataSource: PoliticalGroupMembersTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new PoliticalGroupMembersTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
