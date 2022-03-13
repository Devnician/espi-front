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
import { EditPoliticalGroupComponent } from './edit-political-group.component';

describe('EditPoliticalGroupComponent', () => {
  let component: EditPoliticalGroupComponent;
  let fixture: ComponentFixture<EditPoliticalGroupComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EditPoliticalGroupComponent],
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
          { provide: MatDialogRef, useValue: {} },
          { provide: MAT_DIALOG_DATA, useValue: {} },
          Valido,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPoliticalGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
