import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { Donkey } from 'src/app/services/donkey.service';
import { VotePreviewComponent } from './vote-preview.component';

describe('VotePreviewComponent', () => {
  let component: VotePreviewComponent;
  let fixture: ComponentFixture<VotePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VotePreviewComponent],
      imports: [RouterTestingModule, MatCardModule, MatSnackBarModule],
      providers: [Donkey],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
