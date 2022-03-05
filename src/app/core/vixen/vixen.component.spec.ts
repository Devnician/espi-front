import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { Valido } from '../valido';
import { VixenComponent } from './vixen.component';
describe('VixenComponent', () => {
  let component: VixenComponent;
  let fixture: ComponentFixture<VixenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VixenComponent],
      imports: [
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
      providers: [Valido, JwtHelperService],
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
