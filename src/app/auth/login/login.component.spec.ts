import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloQueryResult } from '@apollo/client';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject, of, take } from 'rxjs';
import { Valido } from 'src/app/core/valido';
import { AuthService } from 'src/app/services/auth-service';
import { LoginActionQuery } from 'src/generated/graphql';
import { LoggedUser } from '../logged-user.interface';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginOutput$: BehaviorSubject<ApolloQueryResult<LoginActionQuery>> =
    new BehaviorSubject({
      data: { LoginAction: { accessToken: '', fetchToken: '' } },
    } as ApolloQueryResult<LoginActionQuery>);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        RouterTestingModule,
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
        MatProgressBarModule,
        MatCardModule,
      ],
      providers: [
        MockProvider(AuthService, {
          user$: of({ name: 'kiro' } as LoggedUser),
          userRoleIndex$: of(0),
          loginAction: ({ password, egn }) => {
            return loginOutput$.asObservable();
          },
        }),
        // JwtHelperService,
        MockProvider(JwtHelperService, {
          decodeToken: () => {
            return { user: {} } as any;
          },
        }),
        Valido,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.loginForm = (component as any).fb.group({
      egn: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{10}'),
        ]),
      ],
      password: [null, component.valido.validatePassowrd(6, 50)],
    });

    fixture.detectChanges();
  });
  afterEach(() => {
    component.loginForm = null;
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should login', () => {
    component.loginForm = (component as any).fb.group({
      egn: [
        '8003033333',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{10}'),
        ]),
      ],
      password: ['asd123A-', component.valido.validatePassowrd(6, 50)],
    });
    component.loginUser();

    ((component as any).authService as any).user$
      .pipe(take(1))
      .subscribe((data) => {
        expect(data).toBeTruthy();
      });
    //)
  });

  it('should validate login form', () => {
    component.loginForm = (component as any).fb.group({
      egn: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{10}'),
        ]),
      ],
      password: [null, component.valido.validatePassowrd(6, 50)],
    });
    component.loginForm.get('egn').markAsTouched();
    component.loginForm.get('password').markAsTouched();
    expect(component.loginForm.invalid).toBeTrue();
  });
});
