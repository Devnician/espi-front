import {
  AfterViewInit,
  Component,
  Injector,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'is-what';
import { combineLatest, debounce, interval, take } from 'rxjs';
import { LoggedUser } from 'src/app/auth/logged-user.interface';
import { VixenComponent } from 'src/app/core/vixen/vixen.component';
import { Donkey } from 'src/app/services/donkey.service';
import {
  Role_Types_Enum,
  Voting_Section,
  Voting_Section_Bool_Exp,
} from 'src/generated/graphql';
import { VotingSectionsTableDataSource } from './voting-sections-table-datasource';

@Component({
  selector: 'app-voting-sections-table',
  templateUrl: './voting-sections-table.component.html',
  styleUrls: ['./voting-sections-table.component.scss'],
})
export class VotingSectionsTableComponent
  extends VixenComponent
  implements OnInit, AfterViewInit
{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Voting_Section>;
  dataSource: VotingSectionsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'createdAt',
    'address',
    'openedAt',
    'closedAt',
    'actions',
  ];

  searchFields: FormGroup = this.fb.group({
    fullSearchAddress: null,
  });
  canOpenCloseSection = false;

  constructor(
    protected injector: Injector,
    private fb: FormBuilder,
    private router: Router,
    private donkey: Donkey
  ) {
    super(injector);
    this.dataSource = new VotingSectionsTableDataSource(injector);
    this.dataSource.loading.next(true);
    combineLatest(this.userObservables).subscribe((observableResults) => {
      const user: LoggedUser = observableResults[0];
      if (user) {
        const roleIndex = observableResults[1];
        const votingSectionId = user.votingSectionId;
        const hasSecondRole = isNullOrUndefined(user.secondRoleType) === false;
        let currentRole: Role_Types_Enum;
        if (hasSecondRole) {
          currentRole = (
            roleIndex === 0 ? user.roleType.value : user.secondRoleType?.value
          ) as Role_Types_Enum;
        } else {
          currentRole = user.roleType.value as Role_Types_Enum;
        }
        if (currentRole === Role_Types_Enum.SectionLeader) {
          this.canOpenCloseSection = true;
          this.dataSource.condition.next({ id: { _eq: votingSectionId } });
          // console.log('current role: ' + currentRole);
        }
      } else {
        // console.log('the user is gone..');
      }
    });
  }
  ngOnInit(): void {
    this.searchFields
      .get('fullSearchAddress')
      .valueChanges.pipe(debounce(() => interval(800)))
      .subscribe((field) => this.doFilter(field));
  }
  doFilter(field: any): void {
    if (field) {
      const criteria = '%' + field + '%';
      const filterCondition: Voting_Section_Bool_Exp = {
        _or: [
          {
            address: {
              _or: [
                { settlement: { name: { _ilike: criteria } } },
                { street: { _ilike: criteria } },
                { number: { _ilike: criteria } },
                { description: { _ilike: criteria } },
              ],
            },
          },
        ],
      };
      this.dataSource.condition.next(filterCondition);
    } else {
      this.dataSource.condition.next({});
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  editVotingSection(section: Voting_Section) {
    //console.log(section);
    alert('Not implemented yet..');
  }

  showMembers(section: Voting_Section) {
    this.donkey.load({ section });
    this.router.navigate(['voting-sections', 'members']);
  }
  openSection(section: Voting_Section) {
    this.dataSource.votingSectionsService
      .openVotingSection(section.id)
      .pipe(take(1))
      .subscribe((response) => {
        console.log(response);
      });
  }
  closeSection(section: Voting_Section) {
    this.dataSource.votingSectionsService
      .closeVotingSection(section.id)
      .pipe(take(1))
      .subscribe((response) => {
        console.log(response);
      });
  }
}
