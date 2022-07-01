import {
  AfterViewInit,
  Component,
  Injector,
  OnInit,
  ViewChild,
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
  Observable,
  Subscription,
  take,
} from 'rxjs';
import { rowsAnimation } from 'src/app/animations/template.animations';
import { LoggedUser } from 'src/app/auth/logged-user.interface';
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
  Referendums,
  Referendum_Questions,
  Referendum_Votes_Insert_Input,
  Role_Types_Enum,
  Users,
  Users_Bool_Exp,
  Users_Insert_Input,
  Votes_Insert_Input,
  Votings,
  Voting_Types_Enum,
} from 'src/generated/graphql';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { Election } from '../election.class';
import { ModalConfirmationComponent } from '../modal-confirmation/modal-confirmation.component';
import { UsersService } from '../users-service';
import { CustomUser } from './custom-user.class';
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
    'egn',
    'name',
    'surname',
    'family',
    'roles',
    'email',
    'eVoted',
    'voted',
    'actions',
  ];

  searchForm = this.fb.group({ egnFormControl: [null], voting: [null] });
  generator: UsersGenerator = new UsersGenerator();
  municipalitiesIds: GetMunicipalitiesIdsQuery['settlements'];
  municipalitiesLength: number;
  importWorks: BehaviorSubject<boolean> = new BehaviorSubject(false);
  userVotesTaskProcessing: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );
  undistributedUsers: BehaviorSubject<number> = new BehaviorSubject(0);
  distirbutorWorks: BehaviorSubject<boolean> = new BehaviorSubject(false);

  limit: BehaviorSubject<number> = new BehaviorSubject(50000);
  filters: UserFilters = { egn: undefined, votingSectionId: undefined };

  elections: Election[] = [];
  private canSeeSectionProps = false;
  private canSeeCentralProps = false;
  private votingSectionId;
  canSimulateVote: BehaviorSubject<boolean> = new BehaviorSubject(false);

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
      const user: LoggedUser = data[0];
      this.votingSectionId = user.votingSectionId;
      const index = data[1];
      const role: Role_Types_Enum = this.getUSerRole(user as Users, index);
      if (
        role === Role_Types_Enum.Section ||
        role === Role_Types_Enum.SectionLeader
      ) {
        this.filters.votingSectionId = user.votingSectionId;
        this.buildConditionAndNotifyDatasource();
        this.canSeeSectionProps = true;
        if (role === Role_Types_Enum.SectionLeader) {
          this.canSimulateVote.next(true);
        }
      } else {
        this.canSeeSectionProps = false;
      }

      this.canSeeCentralProps =
        role === Role_Types_Enum.Central ||
        role === Role_Types_Enum.CentralLeader;
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
          // console.log(data);
          //  let election: Election = { type: 'voting' } as Election;
          this.dataSource.selectedElection.next(
            this.elections.find((e) => e.id === data.id)
          );
        })
    );
  }

  private loadReferendumsInFilterIfAny() {
    this.votingsService.getStartedReferendums(null).subscribe((response) => {
      response.data.referendums.forEach((element) => {
        let election: Election = { type: 'referendum' } as Election;
        election = Object.assign(election, element);
        this.elections.push(election);
      });
      this.showFirstVotingAsSelected();
    });
  }

  loadVotingsInFilterIfAny() {
    this.votingsService.getStartedVotings(null).subscribe((response) => {
      //  console.log(response);
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
      this.searchForm.get('voting').setValue(this.elections[0]);
      this.dataSource.selectedElection.next(this.elections[0]);
    }
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

  openSetVoteConfirmation(user: CustomUser) {
    console.log(user);
    const dialogRef = this.dialog.open(ModalConfirmationComponent, {
      data: { user },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result.resutls === 'confirm') {
        this.setUserVoted(result.user);
      }
    });
  }

  setUserVoted(user: CustomUser) {
    const election: Election = this.dataSource.selectedElection.getValue();
    switch (election.type) {
      case Voting_Types_Enum.Parliamentary:
      case Voting_Types_Enum.Presidential:
      case Voting_Types_Enum.LocalGovernment:
      case Voting_Types_Enum.Mayoral:
        this.processVotingAndNotify(user);
        break;
      case 'referendum':
        this.processReferendumVoteAndNotify(user);
        break;
      default:
        break;
    }
  }
  processVotingAndNotify(user: CustomUser) {
    if (user.vote) {
      this.dataSource.loading.next(true);
      this.votingsService
        .markVoteAsInSection(user.vote.id)
        .subscribe(({ data, errors }) => {
          this.dataSource.loading.next(false);
          if (errors) {
            console.log(errors);
            return;
          }
          if (data) {
            const id = data.update_votes_by_pk.id;
            this.dataSource.queryRef.refetch();
            this.snackBar.open(
              `Гласоподавателят е записан като гласувал в секция ${this.votingSectionId}.`,
              'ОК',
              { duration: 5000 }
            );
          }
        });
    } else {
      this.snackBar.open(
        'Няма отчетено гласуване за този потребител.',
        'ОК',
        {}
      );
    }
  }
  private processReferendumVoteAndNotify(user: CustomUser) {
    if (user.filteredReferendumVotes) {
      if (user.filteredReferendumVotes.length === 0) {
        this.snackBar.open(
          'Няма отчетено гласуване за този потребител.',
          'ОК',
          {}
        );
      } else {
        this.dataSource.loading.next(true);
        user.filteredReferendumVotes.forEach((element) => {
          element.vote = element.eVote;
          element.sectionId = this.votingSectionId;
          element.userId = user.id;
          delete element.eVote;
          delete element.__typename;
          delete element.referendum_question;
        });
        this.usersService
          .markReferendumEvoteAsVote(
            user.filteredReferendumVotes as Users_Insert_Input[]
          )
          .subscribe(({ data, errors }) => {
            this.dataSource.loading.next(false);
            if (errors) {
              console.log(errors);
              return;
            }
            if (data) {
              const rows = data.insert_referendum_votes.affected_rows;
              this.dataSource.queryRef.refetch();
              this.snackBar.open(
                `Гласоподавателят е записан като гласувал в секция ${this.votingSectionId}.`,
                'ОК',
                { duration: 5000 }
              );
            }
          });
      }
    }
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

  isCentralOrCentralLeader(): boolean {
    return this.canSeeCentralProps;
    // return this.user$.pipe(
    //   map((user) => {
    //     if (user) {
    //       const result =
    //         user?.roleType.value === Role_Types_Enum.CentralLeader ||
    //         user?.secondRoleType?.value === Role_Types_Enum.Central;
    //       return result;
    //     }
    //     return false;
    //   })
    // );
  }
  isSectionOrSectionLeader(): boolean {
    return this.canSeeSectionProps;
    // return this.user$.pipe(
    //   map((user) => {
    //     if (user) {
    //       const result =
    //         user?.roleType.value === Role_Types_Enum.SectionLeader ||
    //         user?.secondRoleType?.value === Role_Types_Enum.Section;
    //       return result;
    //     }
    //     return false;
    //   })
    // );
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
        email: 'mail@mail.bg',
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

  simulateVote() {
    console.log('Start vote');
    this.userVotesTaskProcessing.next(true);
    const election = this.dataSource.selectedElection.getValue();
    // const id = election.id;
    if (election.type === 'referendum') {
      const questions: Referendum_Questions[] = (election as any as Referendums)
        .referendumQuestions;
      const referendumVotes: Referendum_Votes_Insert_Input[] = [];
      this.usersService
        .getUsersIds(
          { votingSectionId: { _eq: /*2344*/ this.votingSectionId } },
          5000
        )
        .subscribe((response) => {
          const arr = response.data.users;
          this.snackBar.open(`В момента гласуват ${arr.length} човека`, 'OK');

          arr.forEach((element) => {
            questions.forEach((q) => {
              const input: Referendum_Votes_Insert_Input = {
                eVote: this.generator.getRandomInteger(0, 100) % 2 === 0,
                questionId: q.id,
                userId: element.id,
              };
              referendumVotes.push(input);
            });
          });

          this.votingsService
            .addVoteForReferendum(referendumVotes)
            .subscribe((response) => {
              // const affected =
              //   response.data.insert_referendum_votes.affected_rows;
              this.snackBar.open(
                `за референдума гласуваха ${arr.length} човека.`,
                'OK'
                // { duration: 5000 }
              );
              this.userVotesTaskProcessing.next(false);
              this.dataSource.queryRef.refetch({});
            });
        });
    } else {
      const votingId = election.id;
      if (election.type === Voting_Types_Enum.Parliamentary) {
        const observables = [
          this.usersService.getUsersIds({ _not: { votes: {} } }, 50000),
          this.votingsService.getVotingCandidates(votingId),
        ];

        combineLatest(observables).subscribe((result) => {
          const userIds = result[0].data['users'] as Users[];
          console.log('start.....');
          this.snackBar.open(
            `В момента гласуват ${userIds.length} човека`,
            'OK'
          );
          const candidates = result[1].data['votings_by_pk'] as Votings;
          const members = candidates.political_group_members;
          const membersLen = members.length;
          const votes: Votes_Insert_Input[] = [];
          let reduceNullPreferences = 0;
          userIds.forEach((element) => {
            const politGroupIndex = this.generator.getRandomInteger(
              0,
              membersLen - 1
            );

            const vote: Votes_Insert_Input = {
              votingId: election.id,
              userId: element.id,
              voteGroupId: members[politGroupIndex].politicalGroupId, //required
              voteUserId:
                reduceNullPreferences > 8 &&
                this.generator.getRandomInteger(0, 1) % 2 === 0
                  ? null
                  : members[politGroupIndex].id,
              //not required
              inSection: false,
            };
            if (reduceNullPreferences > 8) {
              reduceNullPreferences = 0;
            } else {
              reduceNullPreferences++;
            }
            votes.push(vote);
          });

          this.votingsService.createVotes(votes).subscribe((response) => {
            const affected = response.data.insert_votes.affected_rows;
            //  console.log(affected);
            this.snackBar.open(
              `за избора гласуваха ${affected} човека.`,
              'OK'
              // { duration: 5000 }
            );
            this.userVotesTaskProcessing.next(false);
            this.dataSource.queryRef.refetch({});
          });
        });
      } else {
        this.snackBar.open(
          `Не е разработено..`,
          'OK'
          // { duration: 5000 }
        );
      }
    }
  }
}
