import {
  AfterViewInit,
  Component,
  Injector,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { FetchResult } from 'apollo-link';
import { isNullOrUndefined } from 'is-what';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  forkJoin,
  map,
  Observable,
  Subscription,
  take
} from 'rxjs';
import { rowsAnimation } from 'src/app/animations/template.animations';
import { VixenComponent } from 'src/app/core/vixen/vixen.component';
import { SettlementsService } from 'src/app/settlements/settlements-service.service';
import { UsersGenerator } from 'src/app/utils/users-generator.class';
import { VotingsService } from 'src/app/votings/voting-service.service';
import {
  Addresses_Insert_Input,
  BulkInsertUsersMutation,
  GetDistrictsQuery,
  GetMunicipalitiesIdsQuery,
  GetUsersQuery,
  Role_Types_Enum,
  Users,
  Users_Bool_Exp,
  Users_Insert_Input
} from 'src/generated/graphql';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { Election } from '../election.class';
import { UsersService } from '../users-service';
import { UserFilters } from './user-filters.interface';
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
    // 'voted',
    // 'eVoted',
    'tempVoted',
    'actions',
  ];

  searchForm = this.fb.group({ egnFormControl: [null], voting : [null] });
  generator: UsersGenerator = new UsersGenerator();
  municipalitiesIds: GetMunicipalitiesIdsQuery['settlements'];
  municipalitiesLength: number;
  importWorks: BehaviorSubject<boolean> = new BehaviorSubject(false);
  undistributedUsers: BehaviorSubject<number> = new BehaviorSubject(0);
  distirbutorWorks: BehaviorSubject<boolean> = new BehaviorSubject(false);

  limit: BehaviorSubject<number> = new BehaviorSubject(50000);
  filters: UserFilters = { egn: undefined, votingSectionId: undefined };

  elections: Election[] = [];
  // selectedElection: Election;
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
    private votingsService: VotingsService,
    private settlementsService: SettlementsService,

    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private fb: FormBuilder,

    injector: Injector
  ) {
    super(injector);
    this.dataSource = new UsersTableDataSource(usersService, snackBar);
    this.dataSource.loading.next(true);
    this.loadReferendumsInFilterIfAny();
    this.loadVotingsInFilterIfAny();
  }

  ngOnInit(): void {
    combineLatest(this.userObservables).subscribe((data) => {
      const user = data[0];
      const index = data[1];
      const role: Role_Types_Enum = this.getUSerRole(user as Users, index);
      if (
        role === Role_Types_Enum.Section ||
        role === Role_Types_Enum.SectionLeader
      ) {
        this.filters.votingSectionId = user.votingSectionId;
        this.buildConditionAndNotifyDatasource();
      }
    });

    this.settlementsService.getMunicipalitiesIds().subscribe((response) => {
      if (response.data) {
        this.municipalitiesIds = response.data.settlements;
        this.municipalitiesLength =
          response.data.settlements_aggregate.aggregate.count;
      }
    });
    this.checkUndistributed();
    this.attachLiteners();
  }
  attachLiteners() {
    this.subscriptions.push(
      this.searchForm
        .get('egnFormControl')
        .valueChanges.pipe(debounceTime(800))
        .subscribe((data) => {
          this.searchChanged(data);
        }),
      this.searchForm
        .get('voting')
        .valueChanges.pipe(debounceTime(100))
        .subscribe((data) => {
          console.log(data);
          //  let election: Election = { type: 'voting' } as Election;

          this.dataSource.selectedElection.next(
            this.elections.find((e) => e.id === data.id)
          );
        })
    );
  }

  private loadReferendumsInFilterIfAny() {
    this.votingsService.getStartedReferendums().subscribe((response) => {
      response.data.referendums.forEach((element) => {
        let election: Election = { type: 'referendum' } as Election;
        election = Object.assign(election, element);
        this.elections.push(election);
      });
      this.showFirstVotingAsSelected();
    });
  }

  loadVotingsInFilterIfAny() {
    this.votingsService.getStartedVotings().subscribe((response) => {
      console.log(response);
      if (response.data.votings) {
        response.data.votings.forEach((element) => {
          let election: Election = { type: 'voting' } as Election;
          election = Object.assign(election, element);
          this.elections.push(election);
        });
        this.showFirstVotingAsSelected();
      }
    });
  }

  showFirstVotingAsSelected() {
    if (isNullOrUndefined(this.searchForm.get('voting').value)) {
      console.log('SET FIRST ....');
      this.searchForm.get('voting').setValue(this.elections[0]);
      // this.selectedElection = this.elections[0];
      this.dataSource.selectedElection.next(this.elections[0]);
    }
  }

  // decorateUsers() {
  //   console.log(this.selectedElection);
  // }

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
    this.filters.egn = value ?? undefined;
    this.buildConditionAndNotifyDatasource();
  }

  buildConditionAndNotifyDatasource() {
    const whereClause: Users_Bool_Exp = { _and: [] };
    if (this.filters.egn) {
      whereClause._and.push({ egn: { _like: `%${this.filters.egn}%` } });
    }
    if (this.filters.votingSectionId) {
      whereClause._and.push({
        votingSectionId: { _eq: this.filters.votingSectionId },
      });
    }

    this.dataSource.condition.next(whereClause);
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
    // console.log('use generator..');
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
