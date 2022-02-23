import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Valido } from '../valido';
import { VixenComponent } from './vixen.component';
describe('VixenComponent', () => {
  let component: VixenComponent;
  let fixture: ComponentFixture<VixenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VixenComponent],
      imports: [HttpClientTestingModule],
      providers: [Valido],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VixenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
