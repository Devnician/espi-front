import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { Valido } from 'src/app/core/valido';
import { VotingSectionsTableComponent } from './voting-sections-table.component';

describe('VotingSectionsTableComponent', () => {
  let component: VotingSectionsTableComponent;
  let fixture: ComponentFixture<VotingSectionsTableComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [VotingSectionsTableComponent],
        imports: [
          NoopAnimationsModule,
          MatPaginatorModule,
          MatSortModule,
          MatTableModule,
          ReactiveFormsModule,
          MatSnackBarModule,
          MatProgressBarModule,
        ],
        providers: [
          Valido,
          Router
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingSectionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
