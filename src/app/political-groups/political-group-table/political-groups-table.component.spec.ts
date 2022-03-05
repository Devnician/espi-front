import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Donkey } from 'src/app/services/donkey.service';
import { PoliticalGroupsTableComponent } from './political-groups-table.component';

describe('PoliticalGroupsTableComponent', () => {
  let component: PoliticalGroupsTableComponent;
  let fixture: ComponentFixture<PoliticalGroupsTableComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PoliticalGroupsTableComponent],
        imports: [
          NoopAnimationsModule,
          MatPaginatorModule,
          MatSortModule,
          MatTableModule,
          MatSnackBarModule,
          MatDialogModule,
          RouterTestingModule,
        ],
        providers: [Donkey],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalGroupsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
