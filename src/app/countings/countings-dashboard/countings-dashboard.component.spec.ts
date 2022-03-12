import { LayoutModule } from '@angular/cdk/layout';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Donkey } from 'src/app/services/donkey.service';
import { CountingsDashboardComponent } from './countings-dashboard.component';

describe('CountingsDashboardComponent', () => {
  let component: CountingsDashboardComponent;
  let fixture: ComponentFixture<CountingsDashboardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CountingsDashboardComponent],
        imports: [
          NoopAnimationsModule,
          LayoutModule,
          MatButtonModule,
          MatCardModule,
          MatGridListModule,
          MatIconModule,
          MatMenuModule,
          RouterTestingModule,
          MatProgressBarModule,
        ],
        providers: [Donkey],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CountingsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
