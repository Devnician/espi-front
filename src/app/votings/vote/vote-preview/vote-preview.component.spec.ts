import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotePreviewComponent } from './vote-preview.component';

describe('VotePreviewComponent', () => {
  let component: VotePreviewComponent;
  let fixture: ComponentFixture<VotePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotePreviewComponent ]
    })
    .compileComponents();
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
