import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Referendum_Questions } from 'src/generated/graphql';
import { EditReferendumTableDataSource } from './edit-referendum-table-datasource';

@Component({
  selector: 'app-edit-referendum-table',
  templateUrl: './edit-referendum-table.component.html',
  styleUrls: ['./edit-referendum-table.component.scss'],
})
export class EditReferendumTableComponent implements AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<Referendum_Questions>;
  @Input() isUpdate: Observable<boolean>;
  @Input() dataSource: EditReferendumTableDataSource;

  createDisplayedColumns = ['question'];
  editDisplayedColumns = ['createdAt', 'updatedAt', 'question', 'actions'];

  constructor() {
    this.dataSource = new EditReferendumTableDataSource();
  }

  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
  }

  removeQuestion(question: Referendum_Questions, index: number) {
    if (question.id) {
      this.dataSource.identifiersOfRemovedQuestions.push(question.id);
    }
    const data = this.dataSource.data.value;
    data.splice(index, 1);
    this.dataSource.data.next(data);
  }
}
