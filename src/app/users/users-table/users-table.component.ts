import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { rowsAnimation } from 'src/app/animations/template.animations';
import { SettlementsService } from 'src/app/settlements/settlements-service.service';
import { GetDistrictsQuery, GetUsersQuery, Users } from 'src/generated/graphql';
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
    'createdAt',
    'updatedAt',
    'name',
    'surname',
    'family',
    'email',
    'voted',
    'eVoted',
  ];

  constructor(
    private usersService: UsersService,
    private settlementsService: SettlementsService
  ) {
    this.dataSource = new OrdersTableDataSource(usersService);
    this.dataSource.loading.next(true);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  addUser() {
    console.log('Add one user');
    this.dataSource.loading.next(true);

    const user: any = {
      name: 'Кирил',
      surname: 'Иванов',
      family: 'Иванов',
      egn: '8080808082',
      email: 'alabala@bala.ala',
      roleId: 2,
      address: {
        data: {
          number: 10,
          street: 'Borisova',
          settlementId: 3382, // TODO
          districtId: 3412, // TODO
        },
      },
    };
    this.usersService.createUser(user).subscribe((response) => {
      if (response && response.data) {
        const createdUser: Users = response.data.insert_users_one as Users;
        console.log(createdUser);
        this.dataSource.queryRef.refetch({});
      } else {
        console.log(response);
      }
    });
  }

  updateFirst() {
    this.dataSource.loading.next(true);
    // console.log(this.dataSource.currentPageData.value);
    const firstFromPage: Users = _.cloneDeep(
      _.first(this.dataSource.currentPageData.value)
    );
    if (firstFromPage) {
      console.log(firstFromPage);
      // HERE must clean useless data
      delete firstFromPage.address;
      delete firstFromPage.createdAt;
      delete firstFromPage.updatedAt;
      delete firstFromPage.__typename;

      //       addressId: 2
      // createdAt: "2021-12-15T20:07:08.31307+00:00"
      // egn: "8080808080"
      // email: "alabala@bala.ala"
      // family: "Иванов"
      // id: 2
      // name: "Иван"
      // password: null
      // pin: null
      // roleId: 2
      // secondRoleId: null
      // sectionId: null
      // surname: "Иванов"
      // updatedAt: "2021-12-15T20:13:13.624189+00:00"
      // __typename: "users"

      this.usersService
        .updateUser(firstFromPage)
        .subscribe(({ errors, data }) => {
          console.log(errors);
          console.log(data);
        });
      console.log('Update', firstFromPage);
    }
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
}
