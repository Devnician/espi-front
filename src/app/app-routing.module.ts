import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    // path: '',
    // component: HomeComponent,
    path: '',
    component: NavigationComponent,
    // canActivate: [ChildGuard],
    data: { breadcrumb: 'начало' },
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('src/app/users/users.module').then((m) => m.UsersModule),

        data: {
          title: 'Потребители',
          breadcrumb: 'потребители',
        },
      },
      {
        path: 'settlements',
        loadChildren: () =>
          import('src/app/settlements/settlements.module').then(
            (m) => m.SettlementsModule
          ),

        data: {
          title: 'Населени места',
          breadcrumb: 'населени места',
        },
      },
      {
        path: 'voting-sections',
        loadChildren: () =>
          import('src/app/voting-sections/voting-sections.module').then(
            (m) => m.VotingSectionsModule
          ),

        data: {
          title: 'Избирателни секции',
          breadcrumb: 'избирателни секции',
        },
      },
    ],
  },

  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
