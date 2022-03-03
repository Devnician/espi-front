import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { rowsAnimation } from 'src/app/animations/template.animations';
import { Donkey } from 'src/app/services/donkey.service';
import { Political_Groups } from 'src/generated/graphql';
import { EditPoliticalGroupComponent } from '../edit-political-group/edit-political-group.component';
import { PoliticalGroupsService } from '../political-groups-service';
import { PoliticalGroupTableDataSource } from './political-groups-table-datasource';

@Component({
  selector: 'app-political-groups-table',
  templateUrl: './political-groups-table.component.html',
  styleUrls: ['./political-groups-table.component.scss'],
  animations: [rowsAnimation],
})
export class PoliticalGroupsTableComponent implements AfterViewInit {
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
    'members',
    'actions',
  ];

  constructor(
    private politicalGroupsService: PoliticalGroupsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router,
    private donkey: Donkey
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
  showMembers(politicalGroup: Political_Groups) {
    console.log(politicalGroup);
    this.donkey.load({ pGroup: politicalGroup });
    this.router.navigate(['political-groups', 'members']);
  }

  editPoliticalGroup(politicalGroup: Political_Groups) {
    console.log(politicalGroup);

    const config = new MatDialogConfig<any>();
    // config.closeOnNavigation = true;
    config.disableClose = true;
    config.data = {
      politicalGroup,
      // user: this.loggedUSer,
    };
    (config.width = '80vw'), (config.height = 'fit-content');

    const dialogRef = this.dialog.open(EditPoliticalGroupComponent, config);
    dialogRef.afterClosed().subscribe((dialogResponse) => {
      console.log(dialogResponse);
      if (dialogResponse && dialogResponse.result === 'success') {
        this.dataSource.queryRef.refetch();
      }
    });
  }
}
