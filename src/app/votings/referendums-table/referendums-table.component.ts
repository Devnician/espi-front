import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Referendums } from 'src/generated/graphql';
import { EditReferendumComponent } from '../edit-referendum/edit-referendum.component';
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
  displayedColumns = ['id', 'name', 'startedAt', 'finishedAt', 'actions'];

  constructor(
    private votingService: VotingsService,
    private matSnackBar: MatSnackBar,
    private dialog: MatDialog
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

  createReferendum() {
    console.log('CREATE');
    this.openDialog(undefined);
  }
  editReferendum(referendum: Referendums) {
    console.log('EDIT');
    this.openDialog(referendum);
  }

  openDialog(referendum: Referendums) {
    const config = new MatDialogConfig<any>();
    // config.closeOnNavigation = true;
    // config.disableClose = true;
    config.data = {
      referendum,
    };
    (config.width = '80vw'), (config.height = 'fit-content');

    const dialogRef = this.dialog.open(EditReferendumComponent, config);

    // this.subscriptions.push(
    dialogRef.afterClosed().subscribe((data) => {
      if (data?.status === 'OK') {
        this.dataSource.queryRef.refetch({});
      }
    });
    // );
  }
}
