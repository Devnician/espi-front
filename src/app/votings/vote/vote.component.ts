import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'is-what';
import { BehaviorSubject } from 'rxjs';
import { Donkey } from 'src/app/services/donkey.service';
import { Political_Group_Members, Votings } from 'src/generated/graphql';
import { VotingsService } from '../voting-service.service';
// fake interfaces

export interface PolitGroup {
  politGroupId: number;
  num: number;
  groupType: string;
  name: string;
  description: string;
  candidates: Candidate[];
}
export interface Candidate {
  politGroupMemberId: number;
  userId: number;
  num: number;
  selected: boolean;
  name: string;
  surname: string;
  family: string;
}
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent implements OnInit {
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(true);
  loading$ = this.loading.asObservable();
  politicalGroups: BehaviorSubject<PolitGroup[]> = new BehaviorSubject([]);
  selected = new FormControl(null);
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

        const groups: PolitGroup[] = [{ num: 0 } as PolitGroup];

        const politicalMembers: Political_Group_Members[] = response.data
          .votings_by_pk
          .political_group_members as any as Political_Group_Members[];
        console.log(politicalMembers);

        politicalMembers.forEach((politMember) => {
          const politGroup = groups.find(
            (g) => g.politGroupId === politMember.political_group.id
          );
          if (politGroup) {
            politGroup.candidates.push({
              politGroupMemberId: politMember.id,
              userId: politMember.userId,
              num: politGroup.candidates.length + 1,
              name: politMember.user.name,
              surname: politMember.user.surname,
              family: politMember.user.family,
              selected: false,
            });
          } else {
            const politGroup: PolitGroup = {
              politGroupId: politMember.political_group.id,
              num: groups.length + 1,
              description: politMember.political_group.description,
              name: politMember.political_group.name,
              groupType:
                politMember.political_group.political_group_type.description,
              candidates: [
                {
                  politGroupMemberId: politMember.id,
                  userId: politMember.userId,
                  num: 1,
                  name: politMember.user.name,
                  surname: politMember.user.surname,
                  family: politMember.user.family,
                  selected: false,
                },
              ],
            };
            groups.push(politGroup);
          }
          // m.politicalGroupId;
        });
        this.politicalGroups.next(groups);
        this.loading.next(false);
      });
  }

  onSelectPoliticalGroup(index: number) {
    this.selected.setValue(index);
    this.selectedPoliticalGroup.next(this.politicalGroups.value[index]);
  }

  canGoToPreview() {
    return isNullOrUndefined(this.selectedPoliticalGroup.getValue());
  }

  goToPreviewPage() {
    const selectedPolitGroup: PolitGroup = this.selectedPoliticalGroup.value;
    this.donkey.load({
      selectedPolitGroup,
      votingId: this.voting.getValue().id,
    });
    this.router.navigateByUrl('/votings/preview');
  }
}
