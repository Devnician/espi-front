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
import {
  Political_Groups,
  Political_Group_Members,
} from 'src/generated/graphql';
import { AddPoliticalGroupMemberComponent } from '../add-political-group-member/add-political-group-member.component';
import { PoliticalGroupsService } from '../political-groups-service';
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
    'active',
    'actions',
  ];
  politicalGroup: Political_Groups;

  constructor(
    private dialog: MatDialog,
    private politicalGroupsService: PoliticalGroupsService,
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
    this.politicalGroupsService
      .updateStateOfPoliticalMember(member.id, !member.active)
      .subscribe(({ data, errors }) => {
        if (errors) {
          console.log(errors);
        } else {
          this.snackBar.open('Стътуса е променен успешно', '', {
            duration: 3500,
          });
          this.dataSource.queryRef.refetch({});
        }
      });
  }
}
