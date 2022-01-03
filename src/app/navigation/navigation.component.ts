import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav/drawer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {
  filter,
  map,
  Observable,
  shareReplay,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import { Valido } from '../core/valido';
import { VixenComponent } from '../core/vixen/vixen.component';
import { EspiMenu } from './espi-menu.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent extends VixenComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer;
  public readonly isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result: BreakpointState) => result.matches),
      shareReplay()
    );
  menus: EspiMenu[] = [];
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    private snackbar: MatSnackBar,
    public valido: Valido
  ) {
    super(valido);
  }

  ngOnInit(): void {
    this.determineUserPermisionsAndMenus('admin'); // TODO - add enum !!! //this.role.value);

    this.subscriptions.push(
      this.router.events
        .pipe(
          withLatestFrom(this.isHandset$),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          filter(([event, b]) => {
            return event instanceof NavigationEnd;
          }),
          switchMap(([a, b]) => {
            if (b) {
              this.drawer.close();
            }
            return [a, b];
          }),
          map(() => {
            let child = this.activatedRoute.firstChild;
            while (child.firstChild) {
              child = child.firstChild;
            }
            if (child.snapshot.data['title']) {
              return child.snapshot.data['title'];
            }
            return 'TITLE'; //appTitle;
          })
        )
        .subscribe((title: string) => {
          console.log(title);
          // this.titleService.setTitle(title);
        })
    );
  }

  private determineUserPermisionsAndMenus(role: string): void {
    // this.initPermissionsForMenus();

    // switch (role) {
    //   case User_Role_Enum.Admin:

    //   case User_Role_Enum.User:
    this.buildMenuForThisRole(role);
    //     break;
    //   default:
    //     this.menus = [];
    //     break;
    // }
  }
  buildMenuForThisRole(role: string) {
    this.menus.push({
      route: 'users',
      label: 'Гласоподаватели',
      matIcon: 'groups',
      badgeSubject: undefined,
    });
    this.menus.push({
      route: 'settlements',
      label: 'Населени места',
      matIcon: 'location_city',
      badgeSubject: undefined,
    });
    this.menus.push({
      route: 'voting-sections',
      label: 'Секции',
      matIcon: 'how_to_vote',
      badgeSubject: undefined,
    });
    this.menus.push({
      route: 'votings',
      label: 'Изброри',
      matIcon: 'front_hand',
      badgeSubject: undefined,
    });
  }
}
