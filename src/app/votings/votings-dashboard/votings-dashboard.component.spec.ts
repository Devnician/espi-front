import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MockProvider } from 'ng-mocks';
import { Observable, of } from 'rxjs';
import { Valido } from 'src/app/core/valido';
import { AuthService } from 'src/app/services/auth-service';
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
          MatProgressBarModule,
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
        providers: [
          Valido,
          Donkey,
          JwtHelperService,
          MockProvider(AuthService, {
            user$: new Observable(),
            userRoleIndex$: of(0),
          }),
        ],
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
