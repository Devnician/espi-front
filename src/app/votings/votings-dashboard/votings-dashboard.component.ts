import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Votings } from 'src/generated/graphql';
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
  votings: BehaviorSubject<VotingParams[]> = new BehaviorSubject([]);
  /** Based on the screen size, switch from standard to one column per row */
  cards: Observable<VotingParams[]> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(({ matches }) => {
        console.log(matches);
        const params = this.votings.value;
        const res = [];

        if (matches) {
          params.forEach((element) => {
            element.cols = 2;
            element.rows = 1;
            res.push(element);
          });
          return res;
        }
        params.forEach((element) => {
          element.cols = 1;
          element.rows = 1;
          res.push(element);
        });
        return res;
      })
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private voitngsService: VotingsService
  ) {
    this.getStartedVotings();
    this.initVotingsCards();
  }
  getStartedVotings() {
    this.voitngsService.getStartedVotings().subscribe((response) => {
      if (response.data) {
        const votings: Votings[] = response.data.votings as Votings[];
        console.log(votings);
        console.log(response.data.votings_aggregate.aggregate.count);
        // const votingsCount = response.data.
      }
      console.log(response);
    });
  }

  initVotingsCards() {
    // Get the current votings from database..
    this.votings.next([
      {
        title: 'Парламентарни избори 2022',
        text: 'Описание на избора',
        cols: 2,
        rows: 1,
        type: 'alabala',
        id: 1,
      },
      {
        title: 'Референдум 2022',
        text: 'Описание на референдума',
        cols: 2,
        rows: 1,
        type: 'alabala',
        id: 2,
      },
    ]);
  }

  goToVotingComponent(vote: VotingParams) {
    console.log('go to vote', vote);
    // console.log(this.activatedRoute.url.);
    // this.router.navigate(['vote'], {
    //   relativeTo: this.activatedRoute,
    // });
    if (vote.id === 1) {
      this.router.navigate(['vote'], {
        relativeTo: this.activatedRoute,
      });
    }
    if (vote.id === 2) {
      this.router.navigate(['referendum'], {
        relativeTo: this.activatedRoute,
      });
    }
    // alert(JSON.stringify(vote));
    //console.log(vote);
  }
}
