import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, switchMap } from 'rxjs';
import { Donkey } from 'src/app/services/donkey.service';
import { Referendums, Referendum_Countings, Votings } from 'src/generated/graphql';
import { VotingsService } from '../../votings/voting-service.service';
import { CountingService } from '../counting-service.service';
import { Custom_Referendum_Countings } from '../types';
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
  selector: 'app-countings-dashboard',
  templateUrl: './countings-dashboard.component.html',
  styleUrls: ['./countings-dashboard.component.scss'],
})
export class CountingsDashboardComponent {
  referendums: BehaviorSubject<Referendums[]> = new BehaviorSubject([]);
  votings: BehaviorSubject<Votings[]> = new BehaviorSubject([]);
  countings: BehaviorSubject<Custom_Referendum_Countings[]> = new BehaviorSubject([]);
  /** Based on the screen size, switch from standard to one column per row */
  cards: BehaviorSubject<VotingParams[]> = new BehaviorSubject([]);
  // cards$: Observable<VotingParams[]>;
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  loadedReferendums: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loadedVotings: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loadedCountings: BehaviorSubject<boolean> = new BehaviorSubject(false);
  observables: Observable<boolean>[] = [
    this.loadedReferendums,
    this.loadedVotings,
    this.loadedCountings
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private voitngsService: VotingsService,
    private countingService: CountingService,

    private donkey: Donkey
  ) {
    this.loading.next(true);
    this.getStartedReferendums();
    this.getStartedVotings();
    this.getReferendumCountings();
    combineLatest(this.observables).subscribe((observableResults) => {
      if (observableResults.indexOf(false) < 0) {
        this.loading.next(false);
      }
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
    this.countingService
      .getFinishedReferendums()
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


  getReferendumCountings() {
    this.countingService.getReferendumCountings()
      .pipe(
        switchMap((response) => {
          const countings = response.data.referendum_countings.map(q => {
            return {
              referendumId: q.question.referendumId,
              question: q.question.question,
              votesCount: q.votesCount,
              votesTrue: q.votesTrue,
              votesFalse: q.votesFalse
            }
          }
          );
          this.countings.next(countings as Custom_Referendum_Countings[]);
          return this.countings;
        })
      )
      .subscribe((countings) => {
        console.log("countings" + JSON.stringify(countings))
        this.loadedCountings.next(true)
      })
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
