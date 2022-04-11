import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'is-what';
import { BehaviorSubject } from 'rxjs';
import { Donkey } from 'src/app/services/donkey.service';
import { Political_Group_Members, Votes, Votings } from 'src/generated/graphql';
import { VotingsService } from '../voting-service.service';

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
  private vote: Votes;
  voting: BehaviorSubject<Votings> = new BehaviorSubject(undefined);

  preview = false;

  constructor(
    private donkey: Donkey,
    private router: Router,
    private votingsService: VotingsService
  ) {
    if (donkey.isLoaded()) {
      const payload = this.donkey.unload();
      if (payload.vote) {
        this.vote = payload.vote;
      }
      const voting: Votings = payload.voting;
      this.preview = payload.preview;
      console.log('PREVIEW: ' + this.preview);
      this.voting.next(voting);
      this.fetchGroups(voting.id);
    } else {
      this.router.navigate(['votings']);
    }
  }

  ngOnInit(): void {}

  private fetchGroups(votingId: number) {
    this.votingsService
      .getParticipantsInVoting(votingId)
      .subscribe((response) => {
        const groups: PolitGroup[] = [{ num: 0 } as PolitGroup];
        // console.log(response.data);
        const politicalMembers: Political_Group_Members[] = response.data
          .votings_by_pk
          .political_group_members as any as Political_Group_Members[];
        if (politicalMembers.length > 0) {
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
              const pg: PolitGroup = {
                politGroupId: politMember.political_group.id,
                num: groups.length + 1,
                description: politMember.political_group.description,
                name: politMember.political_group.name,
                groupType:
                  politMember.political_group.political_group_type.description,
                candidates: [],
              };
              pg.candidates.push({
                politGroupMemberId: politMember.id,
                userId: politMember.userId,
                num: 1,
                name: politMember.user.name,
                surname: politMember.user.surname,
                family: politMember.user.family,
                selected: false,
              });
              groups.push(pg);
            }
          });
          //  console.log(groups);
          this.politicalGroups.next(groups);

          // set index and pref from previous vote, if any
          if (this.vote) {
            const politGroup = this.vote.voteGroupId;
            const preferenceUserId = this.vote.voteUserId;
            const indexOfGroup = groups.findIndex(
              (e) => e.politGroupId === politGroup
            );
            const gr = groups[indexOfGroup];
            const prefCandidate: Candidate = gr.candidates.find(
              (p) => p.userId === preferenceUserId
            );
            if (prefCandidate) {
              prefCandidate.selected = true;
            }
            this.selected.setValue(indexOfGroup);
          }
        } else {
          this.politicalGroups.next(groups);
        }

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
      voting: this.voting.getValue(),
      oldVote: this.vote,
    });
    this.router.navigateByUrl('/votings/preview');
  }
}
