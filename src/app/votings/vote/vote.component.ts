import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'is-what';
import { BehaviorSubject } from 'rxjs';
import { Donkey } from 'src/app/services/donkey.service';
import { Political_Group_Members, Votings } from 'src/generated/graphql';
import { VotingsService } from '../voting-service.service';
// fake interfaces

export interface Candidate {
  id: number;
  selected: boolean;
  num: number;
  name: string;
  surname: string;
  family: string;
}
export interface PolitGroup {
  id: number;
  groupType: string;
  name: string;
  description: string;
  candidates: Candidate[];
}
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent implements OnInit {
  politicalGroups: BehaviorSubject<PolitGroup[]> = new BehaviorSubject([]);
  selected = new FormControl(-1);
  selectedPoliticalGroup: BehaviorSubject<PolitGroup> = new BehaviorSubject(
    undefined
  );

  voting: BehaviorSubject<Votings> = new BehaviorSubject(undefined);

  constructor(
    private donkey: Donkey,
    private router: Router,
    private votingsService: VotingsService
  ) {
    if (donkey.isLoaded()) {
      const voting: Votings = this.donkey.unload();
      this.voting.next(voting);
      this.fetchGroups(voting.id);
    } else {
      this.router.navigate(['votings', 'dashboard']);
    }
  }

  ngOnInit(): void {}
  private fetchGroups(votingId: number) {
    this.votingsService
      .getParticipantsInVoting(votingId)
      .subscribe((response) => {
        console.log(response);

        const groups: PolitGroup[] = [{ id: -1 } as PolitGroup];

        const politicalMembers: Political_Group_Members[] = response.data
          .votings_by_pk
          .political_group_members as any as Political_Group_Members[];
        console.log(politicalMembers);

        politicalMembers.forEach((m) => {
          const politGroup = groups.find((g) => g.id === m.political_group.id);
          if (politGroup) {
            politGroup.candidates.push({
              id: m.userId,
              num: politGroup.candidates.length + 1,
              name: m.user.name,
              surname: m.user.surname,
              family: m.user.family,
              selected: false,
            });
          } else {
            const politGroup: PolitGroup = {
              id: m.political_group.id,
              description: m.political_group.description,
              name: m.political_group.name,
              groupType: m.political_group.political_group_type.description,
              candidates: [
                {
                  id: m.userId,
                  num: 1,
                  name: m.user.name,
                  surname: m.user.surname,
                  family: m.user.family,
                  selected: false,
                },
              ],
            };
            groups.push(politGroup);
          }
          // m.politicalGroupId;
        });
        this.politicalGroups.next(groups);
      });
    // //TODO -  create service call
    // const groups: PolitGroup[] = [];
    // for (let i = 0; i < 10; i++) {
    //   const childs: Candidate[] = [];
    //   for (let j = 0; j <= i + 1; j++) {
    //     childs.push({
    //       selected: false,
    //       num: j + 1,
    //       firstName: 'Dragan',
    //       lastName: 'Petkov',
    //     });
    //   }
    //   groups.push({
    //     id: i,
    //     buletineNumber: i + childs.length,
    //     name: 'Политическа група ' + i + 1,
    //     childs,
    //   });
    // }
  }

  onSelectPoliticalGroup(index: number) {
    console.log(index);
    const selectedPoliticalGroup = this.politicalGroups.value[index];
    this.selected.setValue(-1);
    console.log(selectedPoliticalGroup);
    this.selectedPoliticalGroup.next(selectedPoliticalGroup);
  }

  focusChange(a: any) {
    console.log(a);
  }

  canGoToPreview() {
    return isNullOrUndefined(this.selectedPoliticalGroup.getValue());
  }

  goToPreviewPage() {
    const selectedPolitGroup: PolitGroup = this.selectedPoliticalGroup.value;
    this.donkey.load({ selectedPolitGroup });
    this.router.navigateByUrl('/votings/preview');
  }
}
