import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import * as _ from 'lodash';
import { BehaviorSubject, map, switchMap, take } from 'rxjs';
import { Donkey } from 'src/app/services/donkey.service';
import { UsersService } from 'src/app/users/users-service';
import {
  Commision_Members,
  Commision_Members_Insert_Input,
  Commissions,
  Commissions_Insert_Input,
  Role_Types_Enum,
  Users,
  Users_Insert_Input,
  Voting_Section,
} from 'src/generated/graphql';
import { VotingSectionsService } from '../voting-section.service';
import { SectionMembersTableDataSource } from './section-members-table-datasource';

@Component({
  selector: 'app-section-members-table',
  templateUrl: './section-members-table.component.html',
  styleUrls: ['./section-members-table.component.scss'],
})
export class SectionMembersTableComponent implements AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<Commision_Members>;
  dataSource: SectionMembersTableDataSource;
  loading: BehaviorSubject<boolean> = new BehaviorSubject(true);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'egn',
    'name',
    'surname',
    'family',
    'role',
    'secondRole',
  ];
  votingSection: Voting_Section;

  constructor(
    private votingSectionsService: VotingSectionsService,
    private usersService: UsersService,
    private donkey: Donkey,
    private matSnackBar: MatSnackBar
  ) {
    this.dataSource = new SectionMembersTableDataSource();
    if (donkey.isLoaded()) {
      this.votingSection = this.donkey.unload().section;
      // console.log(this.votingSection.id);
      this.votingSectionsService
        .getCommissionOfVotingSection(this.votingSection.id)
        .pipe(take(1))
        .subscribe((response) => {
          //  console.log(response);
          if (response.errors) {
            //   console.log(response.errors);
          } else if (response.data) {
            const commissions: Commissions[] = response.data
              .commissions as Commissions[];
            if (commissions.length === 0) {
              this.matSnackBar.open(
                'Тази комисия все още няма членове.',
                'ОК',
                {
                  duration: 8500,
                }
              );
            } else {
              const commission = commissions[0];
              this.dataSource.data.next(commission.commision_members);
            }
          }
          this.loading.next(false);
        });
    } else {
      this.matSnackBar.open('Нещо се обръка. Молим да ни извините.', '', {
        duration: 3500,
      });
      history.back();
    }
  }

  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
  }

  createCommission() {
    this.loading.next(true);
    this.usersService
      .fetchUsersWithCondition(
        {
          votingSectionId: { _eq: this.votingSection.id },
        },
        5
      )
      .pipe(
        map((response) => {
          const users: Users[] = _.cloneDeep(response.data.users as Users[]);
          const set: Users_Insert_Input[] = [];
          const commissionMembers: Commision_Members_Insert_Input[] = [];
          for (let index = 0; index < 5; index++) {
            const user = users[index];
            if (index === 0) {
              user.role = Role_Types_Enum.SectionLeader;
              user.secondRole = Role_Types_Enum.User;
            } else {
              user.role = Role_Types_Enum.Section;
              user.secondRole = Role_Types_Enum.User;
            }
            set.push({
              id: user.id,
              name: user.name,
              surname: user.surname,
              family: user.family,
              egn: user.egn,
              addressId: user.addressId,
              role: user.role,
              secondRole: user.secondRole,
            });
            commissionMembers.push({ userId: user.id, isLeader: index === 0 });
          }
          return { users: set, members: commissionMembers };
        }),
        switchMap((result) => {
          const users = result.users;
          const commission: Commissions_Insert_Input = {
            votingSectionId: this.votingSection.id,
            commision_members: { data: result.members },
          };
          return this.usersService.createSectionCommission(users, commission);
        })
      )
      .subscribe((res) => {
        const commission = res.data.insert_commissions_one;
        this.dataSource.data.next(
          commission.commision_members as Commision_Members[]
        );
        console.log('done.....');
      });
  }
}
