import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'is-what';
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
import {
  Referendums,
  Referendum_Votes,
  Users,
  Votes,
  Votings,
} from 'src/generated/graphql';
import { VotingsService } from '../voting-service.service';
interface VotingParams {
  title: string;
  text: string;
  cols: number;
  rows: number;
  type: string; // enum
  id: number;
  alreadyVoted: boolean;
  canChangeVote: boolean;
  canPreview: boolean;
}
@Component({
  selector: 'app-votings-dashboard',
  templateUrl: './votings-dashboard.component.html',
  styleUrls: ['./votings-dashboard.component.scss'],
})
export class VotingsDashboardComponent {
  referendums: BehaviorSubject<Referendums[]> = new BehaviorSubject([]);
  votings: BehaviorSubject<Votings[]> = new BehaviorSubject([]);
  cards: BehaviorSubject<VotingParams[]> = new BehaviorSubject([]);
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();
  loadedReferendums: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loadedVotings: BehaviorSubject<boolean> = new BehaviorSubject(false);
  fullUserData: BehaviorSubject<Users> = new BehaviorSubject(null);
  observables: Observable<boolean>[] = [
    this.loadedReferendums,
    this.loadedVotings,
  ];
  vote: Votes; // if already voted for this

  constructor(
    // private breakpointObserver: BreakpointObserver,
    private router: Router,
    private voitngsService: VotingsService,
    private usersService: UsersService,
    private authService: AuthService,

    private donkey: Donkey
  ) {
    this.loading.next(true);
    this.getUserObject();
  }
  getUserObject() {
    // fetch user data with votes
    this.authService.user$
      .pipe(
        map((user) => {
          return user?.id;
        }),
        switchMap((id) => {
          return this.usersService.getUserById(id);
        })
      )
      .subscribe((response) => {
        const user: Users = response.data.users_by_pk as Users;
        this.fullUserData.next(user);
        const userSettlementId = user.address.settlementId;

        this.getStartedVotings(userSettlementId);
        this.getStartedReferendums(userSettlementId);

        combineLatest(this.observables).subscribe((observableResults) => {
          if (observableResults.indexOf(false) < 0) {
            this.loading.next(false);
            //  adjust card
            const votedReferendumIds: number[] = [];
            if (isNullOrUndefined(user.referendum_votes) === false) {
              user.referendum_votes.forEach((vote) => {
                votedReferendumIds.push(vote.referendum_question.referendum.id);
              });
            }

            this.cards.value.forEach((card) => {
              if (card.type === 'referendum') {
                if (votedReferendumIds.findIndex((e) => e === card.id) > -1) {
                  // add additional check for voted or evoted ...
                  card.alreadyVoted = true;
                  const vote: Referendum_Votes = user.referendum_votes.find(
                    (r) => r.referendum_question.referendum.id === card.id
                  );
                  if (vote) {
                    card.canChangeVote = isNullOrUndefined(vote.vote);
                  }
                }
              } else {
                this.vote = user.votes.find((e) => e.votingId === card.id);
                if (this.vote) {
                  card.alreadyVoted = true;
                  if (this.vote.inSection === true) {
                    card.canChangeVote = false;
                    card.canPreview = true;
                  } else {
                    card.canChangeVote = true;
                  }
                }
              }
            });
          }
        });
      });
  }

  getStartedVotings(settlementId: number) {
    this.voitngsService
      .getStartedVotings(settlementId)
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
            canChangeVote: false, // ?
          } as VotingParams;
        });
        const currentCards: VotingParams[] = this.cards.value;
        currentCards.push(...votingsParams);
        this.cards.next(currentCards);
        this.loadedVotings.next(true);
      });
  }
  getStartedReferendums(settlementId: number) {
    this.voitngsService
      .getStartedReferendums(settlementId)
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
              canChangeVote: false, // ?
            } as VotingParams;
          }
        );
        const currentCards: VotingParams[] = this.cards.value;
        currentCards.push(...referendumsParams);
        this.cards.next(currentCards);
        this.loadedReferendums.next(true);
      });
  }

  goToVotingComponent(vote: VotingParams, preview = false) {
    if (vote.type === 'referendum' || vote.type === 'national_referendum') {
      const referendum = this.referendums.value.find((r) => r.id === vote.id);
      this.donkey.load(referendum);
      // TODO - send questions of this referendum for preview ....
      this.router.navigate(['/votings/referendum']);
    } else {
      const voting = this.votings.value.find((v) => v.id === vote.id);
      this.donkey.load({ voting, vote: this.vote, preview });
      this.router.navigate(['/votings/vote']);
    }
  }
}
