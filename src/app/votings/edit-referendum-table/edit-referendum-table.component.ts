import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Referendum_Questions } from 'src/generated/graphql';
import { EditReferendumTableDataSource } from './edit-referendum-table-datasource';

@Component({
  selector: 'app-edit-referendum-table',
  templateUrl: './edit-referendum-table.component.html',
  styleUrls: ['./edit-referendum-table.component.scss'],
})
export class EditReferendumTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Referendum_Questions>;
  dataSource: EditReferendumTableDataSource;
  isUpdate = false;

  createDisplayedColumns = ['id', 'question'];
  editDisplayedColumns = ['id', 'createdAt', 'updatedAt', 'question'];

  constructor() {
    this.dataSource = new EditReferendumTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
