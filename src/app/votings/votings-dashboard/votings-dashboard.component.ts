import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  constructor(private breakpointObserver: BreakpointObserver) {
    this.initVotingsCards();
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
        title: 'Президентски избори 2022',
        text: 'Описание на избора',
        cols: 2,
        rows: 1,
        type: 'alabala',
        id: 2,
      },
    ]);
  }

  goToVotingComponent(vote: VotingParams) {
    alert(JSON.stringify(vote));
    //console.log(vote);
  }
}
