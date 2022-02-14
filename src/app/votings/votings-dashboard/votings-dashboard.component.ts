import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth-service';
import { Donkey } from 'src/app/services/donkey.service';
import { UsersService } from 'src/app/users/users-service';
import { Referendums, Votings } from 'src/generated/graphql';
import { VotingsService } from '../voting-service.service';
interface VotingParams {
  title: string;
  text: string;
  cols: number;
  rows: number;
  type: string; // enum
  id: number;
  // TODO add params ..
}
@Component({
  selector: 'app-votings-dashboard',
  templateUrl: './votings-dashboard.component.html',
  styleUrls: ['./votings-dashboard.component.scss'],
})
export class VotingsDashboardComponent {
  isVoted: boolean;
  referendums: BehaviorSubject<Referendums[]> = new BehaviorSubject([]);
  votings: BehaviorSubject<Votings[]> = new BehaviorSubject([]);
  /** Based on the screen size, switch from standard to one column per row */
  cards: BehaviorSubject<VotingParams[]> = new BehaviorSubject([]);
  // cards$: Observable<VotingParams[]>;
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  loadedReferendums: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loadedVotings: BehaviorSubject<boolean> = new BehaviorSubject(false);
  observables: Observable<boolean>[] = [
    this.loadedReferendums,
    this.loadedVotings,
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private voitngsService: VotingsService,
    private usersService: UsersService,
    private authService: AuthService,

    private donkey: Donkey
  ) {
    this.checkIfUserVoted();
    this.loading.next(true);
    this.getStartedReferendums();
    this.getStartedVotings();
    combineLatest(this.observables).subscribe((observableResults) => {
      if (observableResults.indexOf(false) < 0) {
        this.loading.next(false);
      }
    });
  }
  checkIfUserVoted() {
    this.authService.user$.subscribe(u => {
      this.usersService.getUsers(1, 0, { id: { _eq: u.id } }, {}).valueChanges.subscribe(v =>
       this.isVoted = v.data.users[0].voted
      )
    });
  }
  getStartedVotings() {
    this.voitngsService
      .getStartedVotings()
      .pipe(
        switchMap((response) => {
          const votings = response.data.votings;
          this.votings.next(votings as Votings[]);
          return this.votings;
        })
      )
      .subscribe((votings) => {
        const votingsParams: VotingParams[] = votings.map((voting) => {
          return {
            title: voting.name,
            text: voting.description,
            cols: 1,
            rows: 1,
            type: voting.type,
            id: voting.id,
          } as VotingParams;
        });
        const currentCards: VotingParams[] = this.cards.value;
        currentCards.push(...votingsParams);
        this.cards.next(currentCards);
        this.loadedVotings.next(true);
      });
  }
  getStartedReferendums() {
    this.voitngsService
      .getStartedReferendums()
      .pipe(
        switchMap((response) => {
          const referendums = response.data.referendums;
          this.referendums.next(referendums as Referendums[]);
          return this.referendums;
        })
      )
      .subscribe((referendums) => {
        const referendumsParams: VotingParams[] = referendums.map(
          (referendum) => {
            return {
              title: referendum.name,
              text: referendum.description,
              cols: 1,
              rows: 1,
              type: 'referendum',
              id: referendum.id,
            } as VotingParams;
          }
        );
        const currentCards: VotingParams[] = this.cards.value;
        currentCards.push(...referendumsParams);
        this.cards.next(currentCards);
        this.loadedReferendums.next(true);
      });
  }

  goToVotingComponent(vote: VotingParams) {
    console.log('go to vote', vote);

    if (vote.type === 'referendum' || vote.type === 'national_referendum') {
      const referendum = this.referendums.value.find((r) => r.id === vote.id);
      this.donkey.load(referendum);
      this.router.navigate(['/votings/referendum']);
    } else {
      const voting = this.votings.value.find((v) => v.id === vote.id);
      console.log('Open vote screen');
      console.log(voting);
    }
  }
}
