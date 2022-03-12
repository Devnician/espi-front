import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Valido } from 'src/app/core/valido';
import { Role_Types_Enum } from 'src/generated/graphql';
import { EditVotingComponent } from './edit-voting.component';

describe('EditVotingComponent', () => {
  let component: EditVotingComponent;
  let fixture: ComponentFixture<EditVotingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EditVotingComponent],
        imports: [
          NoopAnimationsModule,
          ReactiveFormsModule,
          MatButtonModule,
          MatCardModule,
          MatInputModule,
          MatRadioModule,
          MatSelectModule,
          MatSnackBarModule,
          MatProgressBarModule,
          MatCardModule,
        ],
        providers: [
          {
            provide: MatDialogRef,
            useValue: {},
          },
          {
            provide: MAT_DIALOG_DATA,
            useValue: {
              user: {
                roleType: { value: Role_Types_Enum.User },
                secondRoleType: { value: null },
              },
            },
          },
          Valido,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
