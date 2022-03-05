import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Donkey } from 'src/app/services/donkey.service';
import { PoliticalGroupMembersTableComponent } from './political-group-members-table.component';

describe('PoliticalGroupMembersTableComponent', () => {
  let component: PoliticalGroupMembersTableComponent;
  let fixture: ComponentFixture<PoliticalGroupMembersTableComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PoliticalGroupMembersTableComponent],
        imports: [
          NoopAnimationsModule,
          MatPaginatorModule,
          MatSortModule,
          MatTableModule,
          MatDialogModule,
          MatSnackBarModule,
        ],
        providers: [
          { provide: MatDialogRef, useValue: {} },
          { provide: MAT_DIALOG_DATA, useValue: {} },
          Donkey,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalGroupMembersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
