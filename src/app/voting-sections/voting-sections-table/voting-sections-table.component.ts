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
import { debounce, interval } from 'rxjs';
import { Voting_Section, Voting_Section_Bool_Exp } from 'src/generated/graphql';
import { VotingSectionsTableDataSource } from './voting-sections-table-datasource';

@Component({
  selector: 'app-voting-sections-table',
  templateUrl: './voting-sections-table.component.html',
  styleUrls: ['./voting-sections-table.component.scss'],
})
export class VotingSectionsTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Voting_Section>;
  dataSource: VotingSectionsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'createdAt', 'address', 'actions'];

  searchFields: FormGroup = this.fb.group({
    fullSearchAddress: null,
  });

  constructor(private injector: Injector, private fb: FormBuilder) {
    this.dataSource = new VotingSectionsTableDataSource(injector);
    this.dataSource.loading.next(true);
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
    console.log(section);
  }
}
