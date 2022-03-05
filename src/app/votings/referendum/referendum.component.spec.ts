import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Valido } from 'src/app/core/valido';
import { Donkey } from 'src/app/services/donkey.service';
import { ReferendumComponent } from './referendum.component';

describe('ReferendumComponent', () => {
  let component: ReferendumComponent;
  let fixture: ComponentFixture<ReferendumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReferendumComponent],
      imports: [MatSnackBarModule, HttpClientTestingModule],
      providers: [Donkey, Valido, JwtHelperService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferendumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
