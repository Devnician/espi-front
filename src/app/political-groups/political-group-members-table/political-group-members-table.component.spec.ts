import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockProvider } from 'ng-mocks';
import { Observable, of } from 'rxjs';
import { Valido } from 'src/app/core/valido';
import { AuthService } from 'src/app/services/auth-service';
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
          RouterTestingModule,
          MatProgressBarModule,
        ],
        providers: [
          { provide: MatDialogRef, useValue: {} },
          { provide: MAT_DIALOG_DATA, useValue: {} },
          Donkey,
          Valido,
          MockProvider(AuthService, {
            user$: new Observable(),
            userRoleIndex$: of(0),
          }),
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
