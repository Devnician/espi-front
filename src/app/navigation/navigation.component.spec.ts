import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MockProvider } from 'ng-mocks';
import { Observable, of } from 'rxjs';
import { Valido } from '../core/valido';
import { VixenComponent } from '../core/vixen/vixen.component';
import { AuthService } from '../services/auth-service';
import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationComponent, VixenComponent],
      imports: [
        RouterTestingModule,
        CommonModule,
        MatDialogModule,
        MatSnackBarModule,
        JwtModule.forRoot({
          jwtOptionsProvider: {
            provide: JWT_OPTIONS,
            useFactory: () => {
              return {
                tokenGetter: (token: string) => {
                  return token;
                },
                // allowedDomains: ['example.com'],
              };
            },
            // deps: [Storage],
          },
        }),
        HttpClientTestingModule,
        MatMenuModule,
      ],
      providers: [
        Valido,
        MockProvider(AuthService, {
          // loginAction: () => {
          //   return of();
          // },
          user$: new Observable(),
          userRoleIndex$: of(0),
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
