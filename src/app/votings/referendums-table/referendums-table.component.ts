import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { LoggedUser } from 'src/app/auth/logged-user.interface';
import { AuthService } from 'src/app/services/auth-service';
import { Referendums, Role_Types_Enum } from 'src/generated/graphql';
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
  private loggedUSer: LoggedUser;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'name',
    'startDate',
    'startedAt',
    'finishedAt',
    'questions',
    'actions',
  ];

  constructor(
    private auth: AuthService,
    private votingService: VotingsService,
    private matSnackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.auth.user$.subscribe((data) => {
      this.loggedUSer = data;
    });

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
  canUnlock(): boolean {
    if (
      this.loggedUSer?.roleType.value === Role_Types_Enum.CentralLeader ||
      this.loggedUSer?.secondRoleType.value === Role_Types_Enum.CentralLeader
    ) {
      return true;
    }
    return false;
  }

  openDialog(referendum: Referendums) {
    const config = new MatDialogConfig<any>();
    // config.closeOnNavigation = true;
    config.disableClose = true;
    config.data = {
      referendum,
      user: this.loggedUSer,
    };
    (config.width = '80vw'), (config.height = 'fit-content');

    const dialogRef = this.dialog.open(EditReferendumComponent, config);
    dialogRef.afterClosed().subscribe((dialogResponse) => {
      console.log(dialogResponse);
    });
  }
}
