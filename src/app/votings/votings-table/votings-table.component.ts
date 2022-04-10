import { AfterViewInit, Component, Injector, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { isNullOrUndefined } from 'is-what';
import * as moment from 'moment';
import { LoggedUser } from 'src/app/auth/logged-user.interface';
import { VixenComponent } from 'src/app/core/vixen/vixen.component';
import { AuthService } from 'src/app/services/auth-service';
import { Role_Types_Enum, Votings } from 'src/generated/graphql';
import { EditVotingComponent } from '../edit-voting/edit-voting.component';
import { VotingsService } from '../voting-service.service';
import { VotingsTableDataSource } from './votings-table-datasource';

@Component({
  selector: 'app-votings-table',
  templateUrl: './votings-table.component.html',
  styleUrls: ['./votings-table.component.scss'],
})
export class VotingsTableComponent
  extends VixenComponent
  implements AfterViewInit
{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Votings>;
  dataSource: VotingsTableDataSource;
  startOfDay = moment().startOf('day');
  private loggedUSer: LoggedUser;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  // locked
  // startedAt
  // finishedAt
  displayedColumns = [
    'id',
    'createdAt',
    'updatedAt',
    'name',
    'description',
    'startDate',
    'type',
    'actions',
  ];

  constructor(
    private auth: AuthService,
    private votingService: VotingsService,
    private matSnackBar: MatSnackBar,
    protected injector: Injector,
    private dialog: MatDialog
  ) {
    super(injector);
    this.dataSource = new VotingsTableDataSource(votingService, matSnackBar);
    this.auth.user$.subscribe((data) => {
      this.loggedUSer = data;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  canCreateVote(): boolean {
    if (
      this.loggedUSer?.roleType.value === Role_Types_Enum.CentralLeader ||
      this.loggedUSer?.roleType.value === Role_Types_Enum.Central ||
      this.loggedUSer?.secondRoleType?.value ===
        Role_Types_Enum.CentralLeader ||
      this.loggedUSer?.secondRoleType?.value === Role_Types_Enum.Central
    ) {
      return true;
    }
    return false;
  }

  canStartVoting(voting: Votings): boolean {
    return (
      (this.loggedUSer.roleType.value === Role_Types_Enum.CentralLeader ||
        this.loggedUSer?.secondRoleType?.value ===
          Role_Types_Enum.CentralLeader) &&
      isNullOrUndefined(voting.startedAt) &&
      voting.locked === true
    );
  }
  canStopVoting(voting: Votings): boolean {
    return (
      (this.loggedUSer.roleType.value === Role_Types_Enum.CentralLeader ||
        this.loggedUSer?.secondRoleType?.value ===
          Role_Types_Enum.CentralLeader) &&
      isNullOrUndefined(voting.finishedAt) &&
      isNullOrUndefined(voting.startedAt) === false
    );
  }
  isTodayTheDate(voting: Votings) {
    return moment(voting.startDate).startOf('day').isSame(this.startOfDay);
  }
  start(voting: Votings) {
    this.votingService
      .updateVoting(voting.id, { startedAt: moment(), finishedAt: null })
      .subscribe((response) => {
        this.matSnackBar.open('Беше зададен старт на избора.', 'OK', {
          duration: 3500,
        });
        this.dataSource.refresh.next(true);

        console.log(response);
      });
  }
  stop(voting: Votings) {
    this.votingService
      .updateVoting(voting.id, { finishedAt: moment() })
      .subscribe((response) => {
        // console.log(response);
        this.matSnackBar.open('Гласуването беше прекратено.', 'OK', {
          duration: 3500,
        });
        this.dataSource.refresh.next(true);
      });
  }

  openDialog(voting: Votings) {
    const config = new MatDialogConfig<any>();
    // config.closeOnNavigation = true;
    config.disableClose = true;
    config.data = {
      voting,
      user: this.loggedUSer,
    };
    (config.width = '80vw'), (config.height = 'fit-content');

    const dialogRef = this.dialog.open(EditVotingComponent, config);
    dialogRef.afterClosed().subscribe((dialogResponse) => {
      if (dialogResponse?.success) {
        this.dataSource.loading.next(true);
        this.dataSource.queryRef.refetch();
      }
    });
  }
}
