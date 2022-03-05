import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/services/auth-service';
import { ReferendumsTableComponent } from './referendums-table.component';

describe('ReferendumsTableComponent', () => {
  let component: ReferendumsTableComponent;
  let fixture: ComponentFixture<ReferendumsTableComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ReferendumsTableComponent],
        imports: [
          NoopAnimationsModule,
          MatPaginatorModule,
          MatSortModule,
          MatTableModule,
          MatSnackBarModule,
          HttpClientTestingModule,
          MatDialogModule,
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
        providers: [AuthService, JwtHelperService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferendumsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
