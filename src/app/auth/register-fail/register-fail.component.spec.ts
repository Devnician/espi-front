import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { RegisterFailComponent } from './register-fail.component';

describe('RegisterFailComponent', () => {
  let component: RegisterFailComponent;
  let fixture: ComponentFixture<RegisterFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterFailComponent],
      imports: [MatCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
