import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { RegisterSuccessComponent } from './register-success.component';

describe('RegisterSuccessComponent', () => {
  let component: RegisterSuccessComponent;
  let fixture: ComponentFixture<RegisterSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterSuccessComponent],
      providers: [MatCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
