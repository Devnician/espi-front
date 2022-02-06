import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { rowsAnimation } from 'src/app/animations/template.animations';
import { SettlementsService } from 'src/app/settlements/settlements-service.service';
import { GetDistrictsQuery, GetUsersQuery, Users } from 'src/generated/graphql';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { UsersService } from '../users-service';
import { OrdersTableDataSource } from './users-table-datasource';

@Component({
  selector: 'app-orders-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  animations: [rowsAnimation],
})
export class UsersTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<GetUsersQuery['users']>;
  dataSource: OrdersTableDataSource;
  districts: BehaviorSubject<GetDistrictsQuery['settlements']> =
    new BehaviorSubject(undefined);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    // 'createdAt',
    // 'updatedAt',
    'egn',
    'name',
    'surname',
    'family',
    'egn',
    'roles',
    'email',
    'voted',
    'eVoted',
    'actions',
  ];

  value = '';
  constructor(
    private usersService: UsersService,
    private settlementsService: SettlementsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.dataSource = new OrdersTableDataSource(usersService, snackBar);
    this.dataSource.loading.next(true);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  // addUser() {
  //   console.log('Add one user');
  //   this.dataSource.loading.next(true);

  //   const user: any = {
  //     name: 'Кирил',
  //     surname: 'Иванов',
  //     family: 'Иванов',
  //     egn: '8080808083',
  //     email: 'alabala@bala.ala',
  //     role: Role_Types_Enum.User,
  //     address: {
  //       data: {
  //         number: 10,
  //         street: 'Borisova',
  //         settlementId: 3382, // TODO
  //       },
  //     },
  //   };

  //   this.usersService.createUser(user).subscribe((response) => {
  //     if (response && response.data) {
  //       const createdUser: Users = response.data.insert_users_one as Users;
  //       console.log(createdUser);
  //       this.dataSource.queryRef.refetch({});
  //     } else {
  //       console.log(response);
  //       this.dataSource.loading.next(false);
  //       if (response.errors[0].message.toString().includes('Uniqueness')) {
  //         this.snackBar.open('Вече съществува потребител с това ЕГН', 'OK', {});
  //       }
  //     }
  //   });
  // }

  editUser(user: Users) {
    this.openDialog(user);
  }
  private openDialog(user: Users) {
    const config = new MatDialogConfig<any>();
    // config.closeOnNavigation = true;
    // config.disableClose = true;
    config.data = {
      user,
      // loggedUser: this.loggedUSer,
    };
    (config.width = '80vw'), (config.height = 'fit-content');

    const dialogRef = this.dialog.open(EditUserComponent, config);
    dialogRef.afterClosed().subscribe((dialogResponse) => {
      console.log(dialogResponse);
    });
  }
  testCall(user: Users) {
    console.log(user);
    alert(JSON.stringify(user));
  }

  /**
   * Get district - for example
   */

  public getDistricts() {
    this.settlementsService.getDistricts().subscribe((response) => {
      console.log(response.data.settlements);
      if (response.data) {
        this.districts.next(response.data.settlements);
      }
    });
  }

  searchChanged(value:string){
    this.dataSource.queryRef.refetch({
      limit: this.paginator.pageSize,
      offset: this.paginator.pageIndex * this.paginator.pageSize,
      condition: {egn: {_like: `%${value}%`}},
      orderBy: {},
    })
    console.log(value)
  }

  onSearchClear(){
    this.value="";
    this.dataSource.queryRef.refetch({
      limit: this.paginator.pageSize,
      offset: this.paginator.pageIndex * this.paginator.pageSize,
      condition: {},
      orderBy: {},
    });
    console.log("onSearchClear");
  }
}
