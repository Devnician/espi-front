import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { Valido } from 'src/app/core/valido';
import { Donkey } from 'src/app/services/donkey.service';
import { VotingsDashboardComponent } from './votings-dashboard.component';

describe('VotingsDashboardComponent', () => {
  let component: VotingsDashboardComponent;
  let fixture: ComponentFixture<VotingsDashboardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [VotingsDashboardComponent],
        imports: [
          NoopAnimationsModule,
          LayoutModule,
          MatButtonModule,
          MatCardModule,
          MatGridListModule,
          MatIconModule,
          MatMenuModule,
          RouterTestingModule,
          HttpClientTestingModule,
          JwtModule.forRoot({
            jwtOptionsProvider: {
              provide: JWT_OPTIONS,
              useFactory: () => {
                return {
                  tokenGetter: (token: string) => {
                    return token;
                  },
                };
              },
            },
          }),
        ],
        providers: [Valido, Donkey, JwtHelperService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
