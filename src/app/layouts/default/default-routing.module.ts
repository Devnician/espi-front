import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from 'src/app/navigation/navigation.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { BaseGuard } from 'src/app/quards/base.quard';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    canActivate: [BaseGuard],
    data: { breadcrumb: 'начало' },
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('src/app/users/users.module').then((m) => m.UsersModule),
        canActivate: [BaseGuard],
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
        canActivate: [BaseGuard],
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
        canActivate: [BaseGuard],
        data: {
          title: 'Избирателни секции',
          breadcrumb: 'избирателни секции',
        },
      },
      {
        path: 'votings',
        loadChildren: () =>
          import('src/app/votings/votings.module').then((m) => m.VotingsModule),
        canActivate: [BaseGuard],
        data: {
          title: 'Избори',
          breadcrumb: 'избори',
        },
      },
      {
        path: 'countings',
        loadChildren: () =>
          import('src/app/countings/countings.module').then((m) => m.CountingsModule),
        canActivate: [BaseGuard],
        data: {
          title: 'Преброяване',
          breadcrumb: 'преброяване',
        },
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
