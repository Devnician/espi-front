import {
  AfterViewInit,
  Component,
  Injector,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { FetchResult } from 'apollo-link';
import {
  BehaviorSubject,
  forkJoin,
  map,
  Observable,
  Subscription,
  take,
} from 'rxjs';
import { rowsAnimation } from 'src/app/animations/template.animations';
import { VixenComponent } from 'src/app/core/vixen/vixen.component';
import { SettlementsService } from 'src/app/settlements/settlements-service.service';
import { UsersGenerator } from 'src/app/utils/users-generator.class';
import {
  Addresses_Insert_Input,
  BulkInsertUsersMutation,
  GetDistrictsQuery,
  GetMunicipalitiesIdsQuery,
  GetUsersQuery,
  Role_Types_Enum,
  Users,
  Users_Insert_Input,
} from 'src/generated/graphql';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { UsersService } from '../users-service';
import { UsersTableDataSource } from './users-table-datasource';

@Component({
  selector: 'app-orders-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  animations: [rowsAnimation],
})
export class UsersTableComponent
  extends VixenComponent
  implements OnInit, AfterViewInit
{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<GetUsersQuery['users']>;
  dataSource: UsersTableDataSource;
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
    'roles',
    'email',
    'voted',
    'eVoted',
    'actions',
  ];

  value = '';
  generator: UsersGenerator = new UsersGenerator();

  municipalitiesIds: GetMunicipalitiesIdsQuery['settlements'];
  municipalitiesLength: number;
  importWorks: BehaviorSubject<boolean> = new BehaviorSubject(false);
  undistributedUsers: BehaviorSubject<number> = new BehaviorSubject(0);
  distirbutorWorks: BehaviorSubject<boolean> = new BehaviorSubject(false);

  limit: BehaviorSubject<number> = new BehaviorSubject(50000);

  /**
   *
   * @param usersService
   * @param settlementsService
   * @param snackBar
   * @param dialog
   * @param injector
   */
  constructor(
    private usersService: UsersService,
    private settlementsService: SettlementsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,

    injector: Injector
  ) {
    super(injector);
    this.dataSource = new UsersTableDataSource(usersService, snackBar);
    this.dataSource.loading.next(true);
  }
  ngOnInit(): void {
    this.settlementsService.getMunicipalitiesIds().subscribe((response) => {
      if (response.data) {
        this.municipalitiesIds = response.data.settlements;
        this.municipalitiesLength =
          response.data.settlements_aggregate.aggregate.count;
      }
    });
    this.checkUndistributed();
  }
  checkUndistributed() {
    this.dataSource.loading.next(true);
    this.subscriptions.push(
      this.usersService
        .countUndistributedToVotingSections()
        .pipe(take(1))
        .subscribe(({ data, loading }) => {
          const counter = data.users_aggregate.aggregate.count;
          this.dataSource.loading.next(loading);
          if (counter > 0) {
            this.undistributedUsers.next(counter);
            if (counter < this.limit.value) {
              this.limit.next(counter);
            }
          }
        })
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

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
      // dialogRef.close();
    });
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

  searchChanged(value: string) {
    this.dataSource.queryRef.refetch({
      limit: this.paginator.pageSize,
      offset: this.paginator.pageIndex * this.paginator.pageSize,
      condition: { egn: { _like: `%${value}%` } },
      orderBy: {},
    });
    console.log(value);
  }

  onSearchClear() {
    this.value = '';
    this.dataSource.queryRef.refetch({
      limit: this.paginator.pageSize,
      offset: this.paginator.pageIndex * this.paginator.pageSize,
      condition: {},
      orderBy: {},
    });
    console.log('onSearchClear');
  }

  canUserSeeThis(): Observable<boolean> {
    return this.user$.pipe(
      map((user) => {
        const result =
          user.roleType.value === Role_Types_Enum.CentralLeader ||
          user?.secondRoleType?.value === Role_Types_Enum.Central;
        return result;
      })
    );
  }

  generateUsers() {
    this.dataSource.loading.next(true);
    this.importWorks.next(true);
    //console.log('use generator..');
    // const email = 'email@email.com';
    // console.log('start: ' + moment().toDate());
    let users: Users_Insert_Input[] = [];
    const max = 100000;
    const batchSize = 500;
    let partitionCounter = 0;
    let affectedRowsCounter = 0;

    const observables: Observable<
      FetchResult<
        BulkInsertUsersMutation,
        Record<string, any>,
        Record<string, any>
      >
    >[] = [];
    for (let index = 0; index < max; index++) {
      partitionCounter++;

      const isMale = index % 2 === 0;
      const rand = this.generator.getRandomInteger(
        0,
        this.municipalitiesLength - 1
      );
      //console.log(rand);
      const randomMuniId = this.municipalitiesIds[rand].id;
      const address: Addresses_Insert_Input = {
        settlementId: randomMuniId,
        street: this.generator.getRandomStreetName(),
        number: this.generator.getRandomInteger(1, 120).toString(),
        description: 'Описание...',
      };

      const egn = this.generator.generateEgn(isMale);
      const name = this.generator.generateFirstName(isMale);
      const surname = this.generator.getSurnameOrFamily(isMale);
      const family = this.generator.getSurnameOrFamily(isMale);
      const pin = this.generator.generatePin();
      const user: Users_Insert_Input = {
        egn,
        name,
        surname,
        family,
        role: Role_Types_Enum.User,
        address: { data: address },
        pin,
      };
      users.push(user);
      if (partitionCounter === batchSize || index === max - 1) {
        partitionCounter = 0;
        // flush users
        observables.push(this.usersService.bulkInsertUsers(users));
        users = [];
      }
    }

    const obsMerge = forkJoin(observables);

    const subs: Subscription = obsMerge.subscribe((values) => {
      values.forEach((response) => {
        const aff = response.data.insert_users.affected_rows;

        affectedRowsCounter += aff;
      });

      subs.unsubscribe();

      this.snackBar.open(
        'Бяха създадeни ' +
          affectedRowsCounter +
          ' записа за данни за потребител и адрес',
        'OK',
        {}
      );
      this.importWorks.next(false);
      this.dataSource.loading.next(false);
    });
  }

  distributeTheUndistributedUsers() {
    this.dataSource.loading.next(true);
    this.distirbutorWorks.next(true);
    this.usersService
      .distributeUsers(this.limit.value)
      .subscribe(({ data, errors }) => {
        if (errors) {
          console.log(errors);
        }
        if (data.distribute_the_undistributed_users_new.length > 0) {
          const count = data.distribute_the_undistributed_users_new[0].counter;
          this.snackBar.open(
            'По секции бяха разпределени ' + count + ' потребители.',
            'ОК',
            { duration: 10000 }
          );
          this.distirbutorWorks.next(false);
          this.dataSource.loading.next(true);
          this.checkUndistributed();
        }
      });
  }
}
