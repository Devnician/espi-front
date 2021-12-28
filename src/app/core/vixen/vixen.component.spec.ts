import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VixenComponent } from './vixen.component';

describe('VixenComponent', () => {
  let component: VixenComponent;
  let fixture: ComponentFixture<VixenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VixenComponent ]
    })
    .compileComponents();
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
