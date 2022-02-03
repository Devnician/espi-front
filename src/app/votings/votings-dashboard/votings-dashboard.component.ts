import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, from, Observable } from 'rxjs';
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
  cards: Observable<VotingParams[]>;

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
    //TODO: merge with votings.
    this.cards = from(this.voitngsService.getReferendums(99, null, {locked: {_eq: true}}, {}).result())
      .pipe(map(res => res.data.referendums.map(r => {
        return {
          title: r.name,
          text: r.description,
          cols: 1,
          rows: 1,
          type: "referendum",
          id: r.id,
        } as VotingParams
      })));
  }

  goToVotingComponent(vote: VotingParams) {
    console.log('go to vote', vote);
    // console.log(this.activatedRoute.url.);
    // this.router.navigate(['vote'], {
    //   relativeTo: this.activatedRoute,
    // });
    // if (vote.id === 1) {
    //   this.router.navigate(['vote'], {
    //     relativeTo: this.activatedRoute,
    //   });
    // }
    if (vote.type === "referendum") {
      this.router.navigate([`/votings/referendum/${vote.id}`], {
        relativeTo: this.activatedRoute
      });
    }
    // alert(JSON.stringify(vote));
    //console.log(vote);
  }
}
