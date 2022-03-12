import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MockProvider } from 'ng-mocks';
import { Observable, of } from 'rxjs';
import { Valido } from 'src/app/core/valido';
import { NavigationComponent } from 'src/app/navigation/navigation.component';
import { AuthService } from 'src/app/services/auth-service';
import { DefaultComponent } from './default.component';

describe('DefaultComponent', () => {
  let component: DefaultComponent;
  let fixture: ComponentFixture<DefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultComponent, NavigationComponent],
      imports: [
        RouterTestingModule,
        MatDialogModule,
        MatSnackBarModule,
        HttpClientTestingModule,
        MatMenuModule,
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
          },
        }),
      ],
      providers: [
        Valido,
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
        { provide: MatDialogRef, useValue: {} },
        MockProvider(AuthService, {
          user$: new Observable(),
          userRoleIndex$: of(0),
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
