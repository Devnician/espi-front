import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { Valido } from 'src/app/core/valido';
import { Donkey } from 'src/app/services/donkey.service';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoteComponent, ParentComponent, ChildComponent],
      imports: [RouterTestingModule, MatCardModule],
      providers: [Valido, Donkey],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
