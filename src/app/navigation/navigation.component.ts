import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav/drawer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import {
  filter,
  map,
  Observable,
  shareReplay,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role_Types_Enum } from 'src/generated/graphql';
import { LoggedUser } from '../auth/logged-user.interface';
import { TokenTypes } from '../auth/token-types.enum';
import { Valido } from '../core/valido';
import { VixenComponent } from '../core/vixen/vixen.component';
import { AuthService } from '../services/auth-service';
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
  user: LoggedUser;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    private snackbar: MatSnackBar,
    public valido: Valido,
    private auth: AuthService,
    private jwtHelper: JwtHelperService
  ) {
    super(valido);

    if (environment.production === false) {
      const accessT = localStorage.getItem(TokenTypes.ACCESS_TOKEN);
      const res = this.jwtHelper.decodeToken(accessT);
      console.log(res);
      this.auth.setLoggedUser(res.user);
    }
  }

  ngOnInit(): void {
    this.determineUserPermisionsAndMenus(Role_Types_Enum.Admin);

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
        }),

      this.auth.user$.subscribe((data) => {
        console.log(data);
        this.user = data;
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

  @HostListener('window:beforeunload', ['$event'])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  beforeUnloadHander(event): void {
    if (environment.production === true) {
      this.clearUserData();
    } else {
      // console.log('Developer just reloads page..');
    }
  }

  onChangePassword() {
    console.log('change pass');
  }

  onLogout() {
    this.clearUserData();
    this.router.navigate(['auth/login']);
  }

  private clearUserData() {
    this.auth.clearAll();
    if (environment.production === false) {
      this.auth.TokensFromLocalStorage();
    }
  }
  onRoleChanged(event: any) {
    console.log(event.value);

    // this.user.currentRole = event.value === 1 ?
    // this.auth.user$.subscribe((user) => {
    //   console.log(user);
    // });
  }
}
