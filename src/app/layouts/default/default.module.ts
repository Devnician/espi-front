import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { VixenComponent } from 'src/app/core/vixen/vixen.component';
import { NavigationComponent } from 'src/app/navigation/navigation.component';
import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';

//import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
@NgModule({
  declarations: [
    DefaultComponent,
    NavigationComponent,
    //  HomeComponent,
    VixenComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DefaultRoutingModule,
    NgxJsonViewerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatBadgeModule,
    MatIconModule,
    // JwtModule.forRoot({
    //   jwtOptionsProvider: {
    //     provide: JWT_OPTIONS,
    //     useFactory: () => {
    //       return {
    //         tokenGetter: (token: string) => {
    //           return token;
    //         },
    //         // allowedDomains: ['example.com'],
    //       };
    //     },
    //     // deps: [Storage],
    //   },
    // }),
    // MatBadgeModule,
    //  MatMomentDateModule,
    // MatDatepickerModule,
  ],
  // exports: [NgxJsonViewerModule],
})
export class DefaultModule {}
