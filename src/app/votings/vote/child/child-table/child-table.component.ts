import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Candidate } from '../../vote.component';

@Component({
  selector: 'app-child-table',
  templateUrl: './child-table.component.html',
  styleUrls: ['./child-table.component.scss'],
})
export class ChildTableComponent implements AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<Candidate>;
  @Input() dataSource: Candidate[];
  displayedColumns = ['num', 'name', 'surname', 'family', 'selected'];
  constructor() {}

  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
  }

  onPersonSelected(row: Candidate) {
    this.dataSource.map((person) => {
      person.selected = person.num === row.num;
    });
    this.table.renderRows();
  }
}
