import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  switchMap,
} from 'rxjs';
import { AuthService } from 'src/app/services/auth-service';
import { Donkey } from 'src/app/services/donkey.service';
import { UsersService } from 'src/app/users/users-service';
import { Referendums, Users, Votings } from 'src/generated/graphql';
import { VotingsService } from '../voting-service.service';
interface VotingParams {
  title: string;
  text: string;
  cols: number;
  rows: number;
  type: string; // enum
  id: number;
  alreadyVoted: boolean;
}
@Component({
  selector: 'app-votings-dashboard',
  templateUrl: './votings-dashboard.component.html',
  styleUrls: ['./votings-dashboard.component.scss'],
})
export class VotingsDashboardComponent {
  referendums: BehaviorSubject<Referendums[]> = new BehaviorSubject([]);
  votings: BehaviorSubject<Votings[]> = new BehaviorSubject([]);
  /** Based on the screen size, switch from standard to one column per row */
  cards: BehaviorSubject<VotingParams[]> = new BehaviorSubject([]);
  // cards$: Observable<VotingParams[]>;
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();
  loadedReferendums: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loadedVotings: BehaviorSubject<boolean> = new BehaviorSubject(false);
  fullUserData: BehaviorSubject<Users> = new BehaviorSubject(null);
  observables: Observable<boolean | Users>[] = [
    this.loadedReferendums,
    this.loadedVotings,
    this.fullUserData,
  ];
  alreadyVoted;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private voitngsService: VotingsService,
    private usersService: UsersService,
    private authService: AuthService,

    private donkey: Donkey
  ) {
    this.loading.next(true);
    this.getUserObject();
    this.getStartedReferendums();
    this.getStartedVotings();
    combineLatest(this.observables).subscribe((observableResults) => {
      console.log(observableResults);
      if (observableResults.indexOf(false) < 0) {
        this.loading.next(false);
        //  adjust card &
        const user: Users = observableResults[2] as Users;
        const votedReferendumIds: number[] = [];
        user.referendum_votes.forEach((vote) => {
          votedReferendumIds.push(vote.referendum_question.referendum.id);
        });
        this.cards.value.forEach((card) => {
          if (card.type === 'referendum') {
            if (votedReferendumIds.findIndex((e) => e === card.id) > -1) {
              // add additional check for voted or evoted ...
              card.alreadyVoted = true;
            }
          } else {
            // TODO - check and votings ..
          }
        });
      }
    });
  }
  getUserObject() {
    this.authService.user$
      .pipe(
        map((user) => {
          console.log(user);
          return user.id;
        }),
        switchMap((id) => {
          return this.usersService.getUserById(id);
        })
      )
      .subscribe((response) => {
        const user: Users = response.data.users_by_pk as Users;
        this.fullUserData.next(user);
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
            alreadyVoted: false,
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
              alreadyVoted: false,
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
    //console.log('go to vote', vote);
    if (vote.type === 'referendum' || vote.type === 'national_referendum') {
      const referendum = this.referendums.value.find((r) => r.id === vote.id);
      this.donkey.load(referendum);
      this.router.navigate(['/votings/referendum']);
    } else {
      const voting = this.votings.value.find((v) => v.id === vote.id);
      console.log('Open vote screen');
      this.router.navigate(['/votings/vote']);
      // console.log(voting);
    }
  }
}
