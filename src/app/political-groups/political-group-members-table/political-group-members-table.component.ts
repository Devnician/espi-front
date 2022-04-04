import { AfterViewInit, Component, Injector, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { rowsAnimation } from 'src/app/animations/template.animations';
import { VixenComponent } from 'src/app/core/vixen/vixen.component';
import { Donkey } from 'src/app/services/donkey.service';
import { VotingsService } from 'src/app/votings/voting-service.service';
import {
  Political_Groups,
  Political_Group_Members,
  Votings,
} from 'src/generated/graphql';
import { AddPoliticalGroupMemberComponent } from '../add-political-group-member/add-political-group-member.component';
import { PoliticalGroupsService } from '../political-groups-service';
import { SelectVotingComponent } from '../select-voting/select-voting.component';
import { PoliticalGroupMembersTableDataSource } from './political-group-members-table-datasource';

@Component({
  selector: 'app-political-group-members-table',
  templateUrl: './political-group-members-table.component.html',
  styleUrls: ['./political-group-members-table.component.scss'],
  animations: [rowsAnimation],
})
export class PoliticalGroupMembersTableComponent
  extends VixenComponent
  implements AfterViewInit
{
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
    'votingId',
    'actions',
  ];
  politicalGroup: Political_Groups;

  upcomingVotings: Votings[] = [];

  constructor(
    private dialog: MatDialog,
    private politicalGroupsService: PoliticalGroupsService,
    private votingsService: VotingsService,
    private snackBar: MatSnackBar,
    private donkey: Donkey,
    private router: Router,
    protected injector: Injector
  ) {
    super(injector);
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

    this.loadUpcomingVotings();
  }
  loadUpcomingVotings() {
    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);
    //  console.log(endOfToday);
    this.votingsService
      .getUpcomingVotings(endOfToday)
      .subscribe(({ data, errors }) => {
        if (errors) {
          console.log(errors);
          return;
        }

        this.upcomingVotings = data.votings as Votings[];
        // console.log(this.upcomingVotings);
        this.snackBar.open(
          'Предстоящи избори: ' + this.upcomingVotings.length,
          'OK',
          { duration: 10000 }
        );
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  addMember() {
    const config = new MatDialogConfig<unknown>();
    config.closeOnNavigation = true;
    config.disableClose = false;
    config.minWidth = '40vw';
    config.data = {
      group: this.politicalGroup,
    };

    const dialogRef = this.dialog.open(
      AddPoliticalGroupMemberComponent,
      config
    );

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((data) => {
        if (data?.success === true) {
          this.dataSource.queryRef.refetch({});
        }
      })
    );
  }
  removeMember(member: Political_Group_Members) {
    this.dataSource.loading.next(true);
    this.politicalGroupsService
      .removeMemberFromGroup(member.id)
      .subscribe(({ data, errors }) => {
        if (errors) {
          const errorMessage = errors[0].message;
          if (errorMessage.includes('_root')) {
            this.snackBar.open(
              'Нямате необходимите права за тази операция!',
              'OK',
              { duration: 2000 }
            );
          }
          throw Error(errorMessage);
        }
        this.dataSource.queryRef.refetch();
        this.dataSource.loading.next(false);
      });
  }
  toggleUserState(member: Political_Group_Members) {
    if (this.upcomingVotings.length === 0) {
      this.snackBar.open('Към момента не предстоят избори.');
      return;
    } else {
      const config = new MatDialogConfig<any>();
      // config.closeOnNavigation = true;
      config.disableClose = true;
      config.data = {
        votings: this.upcomingVotings,
      };
      (config.width = '80vw'), (config.height = 'fit-content');

      const dialogRef = this.dialog.open(SelectVotingComponent, config);
      dialogRef.afterClosed().subscribe((dialogResponse) => {
        if (dialogResponse.success) {
          this.updateMemberVotingId(member, Number(dialogResponse.votingId));
        }
      });
    }
  }

  updateMemberVotingId(member: Political_Group_Members, votingId = null) {
    this.dataSource.loading.next(true);
    this.politicalGroupsService
      .updateStateOfPoliticalMember(member.id, votingId)
      .subscribe(({ data, errors }) => {
        if (errors) {
          console.log(errors);
        } else {
          this.snackBar.open(
            `Потребителят беше  ${
              votingId ? 'добавен в' : 'премахнат от'
            } изборния списък успешно`,
            '',
            {
              duration: 3500,
            }
          );
          this.dataSource.queryRef.refetch({});
        }
      });
  }
}
