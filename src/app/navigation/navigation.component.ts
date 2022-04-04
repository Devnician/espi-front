import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import {
  Component,
  HostListener,
  Injector,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav/drawer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { isNullOrUndefined } from 'is-what';
import * as moment from 'moment';
import {
  combineLatest,
  filter,
  map,
  Observable,
  shareReplay,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role_Types_Enum } from 'src/generated/graphql';
import { TokenTypes } from '../auth/token-types.enum';
import { VixenComponent } from '../core/vixen/vixen.component';
import { EspiMenu } from './espi-menu.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent
  extends VixenComponent
  implements OnInit, OnDestroy
{
  @ViewChild('drawer') drawer: MatDrawer;
  static readonly roleToSegments: Map<Role_Types_Enum, readonly string[]> =
    Object.freeze(
      new Map([
        [
          Role_Types_Enum.Admin,
          Object.freeze([
            'users',
            'political-groups',
            // 'settlements',
            'voting-sections',
            'votings-list',
            'referendums-list',
            'dashboard',
          ]),
        ],
        [
          Role_Types_Enum.CentralLeader,
          Object.freeze([
            'users',
            'political-groups',
            // 'settlements',
            'voting-sections',
            'votings-list',
            'referendums-list',
            'dashboard',
          ]),
        ],
        [
          Role_Types_Enum.Central,
          Object.freeze([
            'users',
            'political-groups',
            // 'settlements',
            'voting-sections',
            'votings-list',
            'referendums-list',
            'dashboard',
          ]),
        ],
        [
          Role_Types_Enum.SectionLeader,
          Object.freeze(['users', 'votings-list', 'referendums-list']),
        ],
        [Role_Types_Enum.Section, Object.freeze(['users'])],
        [Role_Types_Enum.User, Object.freeze(['votings'])],
      ])
    );

  public readonly isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result: BreakpointState) => result.matches),
      shareReplay()
    );
  menus: EspiMenu[] = [];
  private interval: any;
  userObservables: Observable<any>[] = [
    this.authService.user$,
    this.authService.userRoleIndex$,
  ];
  hasSecondRole = false;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    private snackbar: MatSnackBar,
    protected injector: Injector,
    private jwtHelper: JwtHelperService
  ) {
    super(injector);

    if (environment.production === false) {
      const accessT = localStorage.getItem(TokenTypes.ACCESS_TOKEN);
      if (isNullOrUndefined(accessT)) {
        this.onLogout();
      }
      // console.log(accessT);
      const res = this.jwtHelper.decodeToken(accessT);
      this.authService.setLoggedUser(res?.user);
    }
  }

  ngOnInit(): void {
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
            // let child = this.activatedRoute?.firstChild;
            // while (child.firstChild) {
            //   child = child.firstChild;
            // }
            // if (child.snapshot.data['title']) {
            //   return child.snapshot.data['title'];
            // }
            return 'TITLE'; //appTitle;
          })
        )
        .subscribe((title: string) => {
          //console.log(title);
        })
    );
    combineLatest(this.userObservables).subscribe((observableResults) => {
      // console.log(observableResults);
      const user = observableResults[0];
      if (user) {
        const roleIndex = observableResults[1];
        this.hasSecondRole = isNullOrUndefined(user.secondRoleType) === false;
        if (this.hasSecondRole) {
          const currentRole = (
            roleIndex === 0 ? user.roleType.value : user.secondRoleType?.value
          ) as Role_Types_Enum;
          this.buildMenuForThisRole(currentRole);
        } else {
          this.buildMenuForThisRole(user.roleType.value);
        }
      } else {
        console.log('the user is gone..');
      }
    });

    this.startRefreshToken();
  }

  private buildMenuForThisRole(role: Role_Types_Enum) {
    // console.log('Rebuild menu for role: ' + role);
    try {
      this.menus = [];
      this.addMenu(...NavigationComponent.roleToSegments.get(role));
    } catch (error) {
      console.log(error);
      this.onLogout();
    }
  }
  addMenu(...keys: string[]) {
    keys.forEach((key) => {
      switch (key) {
        case 'users':
          this.menus.push({
            route: 'users',
            label: 'Гласоподаватели',
            matIcon: 'people',
            badgeSubject: undefined,
          });
          break;
        case 'settlements':
          this.menus.push({
            route: 'settlements',
            label: 'Населени места',
            matIcon: 'location_city',
            badgeSubject: undefined,
          });
          break;
        case 'votings': // dashboard
          this.menus.push({
            route: 'votings',
            label: 'Гласуване',
            matIcon: 'front_hand',
            badgeSubject: undefined,
          });
          break;

        case 'voting-sections':
          this.menus.push({
            route: 'voting-sections',
            label: 'Секции',
            matIcon: 'how_to_vote',
            badgeSubject: undefined,
          });
          break;
        case 'votings-list':
          this.menus.push({
            route: 'votings/votings-list',
            label: 'Избори',
            matIcon: 'list',
            badgeSubject: undefined,
          });
          break;
        case 'referendums-list':
          this.menus.push({
            route: 'votings/referendums-list',
            label: 'Референдуми',
            matIcon: 'list',
            badgeSubject: undefined,
          });
          break;

        case 'dashboard':
          this.menus.push({
            route: 'countings/dashboard',
            label: 'Преброяване',
            matIcon: 'functions',
            badgeSubject: undefined,
          });
          break;

        case 'political-groups':
          this.menus.push({
            route: 'political-groups',
            label: 'Политически групи',
            matIcon: 'groups',
            badgeSubject: undefined,
          });
          break;

        default:
          break;
      }
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  beforeUnloadHander(event): void {
    if (environment.production === true) {
      this.clearUserData();
    } else {
      //  console.log('Developer just reloads page..');
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
    this.authService.clearAll();
    if (environment.production === false) {
      this.authService.clearTokensFromLocalStorage();
    }
  }
  onRoleChanged(event: any) {
    const roleIndex: number = parseInt(event.value);

    this.authService.setCurrentRoleIndex(roleIndex);
    this.authService.refreshToken(/*u.id,*/ roleIndex).subscribe((response) => {
      if (response.error) {
        console.log(response.error);
        this.snackbar.open(
          'Възникна грешка. Ролята Ви не беше промемена успешно.',
          'ОК',
          {}
        );
        return;
      }
      if (response.data?.RefreshToken?.fetchToken) {
        const newFetchToken: string = response.data.RefreshToken.fetchToken;
        this.authService.setFetchTokenAndOptionalRedirectToHome(
          newFetchToken,
          this.router,
          true
        );
        this.snackbar.open('Ролята Ви беше променена успешно.', 'ОК', {
          duration: 5000,
        });
      }
    });
  }
  /**
   *
   */
  startRefreshToken() {
    console.log(' start refresh');
    // get current role
    this.authUser();
    this.interval = setInterval(() => {
      this.authUser();
    }, 45 * 1000);
  }

  authUser() {
    this.authService.userRoleIndex$.subscribe((roleIndex) => {
      this.authService.fetchToken$.subscribe((fetchToken) => {
        const expirationDate: Date =
          this.jwtHelper.getTokenExpirationDate(fetchToken);

        const expireMoment = moment(expirationDate);
        const now = moment();
        const minutes = expireMoment.diff(now, 'minutes');
        // console.log(minutes);
        if (minutes <= 2) {
          // console.log('call backend');
          this.refreshToken(/*this.user.id,*/ roleIndex);
        } else {
          console.log('OK');
        }
      });
    });
  }

  private refreshToken(/*id: number,*/ roleIndex: number) {
    this.authService
      .refreshToken(/*this.user.id,*/ roleIndex)
      .subscribe((response) => {
        console.log(response);
        if (response.error || response.errors) {
          this.onLogout();
        }

        if (response.data?.RefreshToken?.fetchToken) {
          const newFetchToken: string = response.data.RefreshToken.fetchToken;
          console.log('NEW TOKEN...');
          this.authService.setFetchTokenAndOptionalRedirectToHome(
            newFetchToken,
            this.router,
            false
          );
        }
      });
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
