import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { isNullOrUndefined } from 'is-what';
import { BehaviorSubject } from 'rxjs';
// fake interfaces

export interface Candidate {
  selected: boolean;
  num: number;
  firstName: string;
  lastName: string;
}
export interface PolitGroup {
  id: number;
  buletineNumber: number;
  name: string;
  childs: Candidate[];
}
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent implements OnInit {
  label = '';
  politicalGroups: BehaviorSubject<PolitGroup[]> = new BehaviorSubject([]);
  selected = new FormControl(-1);
  selectedPoliticalGroup: BehaviorSubject<PolitGroup> = new BehaviorSubject(
    undefined
  );

  constructor() {
    this.label = 'Избори за ......';
  }

  ngOnInit(): void {
    this.fetchGroups();
  }
  private fetchGroups() {
    //TODO -  create service call
    const groups: PolitGroup[] = [];
    for (let i = 0; i < 10; i++) {
      const childs: Candidate[] = [];
      for (let j = 0; j <= i + 1; j++) {
        childs.push({
          selected: false,
          num: j + 1,
          firstName: 'Dragan',
          lastName: 'Petkov',
        });
      }
      groups.push({
        id: i,
        buletineNumber: i + childs.length,
        name: 'Политическа група ' + i + 1,
        childs,
      });
    }

    this.politicalGroups.next(groups);
  }

  onSelectPoliticalGroup(index: number) {
    const selectedPoliticalGroup = this.politicalGroups.value[index];
    this.selectedPoliticalGroup.next(selectedPoliticalGroup);
  }

  canGoToPreview() {
    return isNullOrUndefined(this.selectedPoliticalGroup.value);
  }

  goToPreviewPage() {
    const selectedPolitGroup: PolitGroup = this.selectedPoliticalGroup.value;
    const selectedPerson: Candidate = selectedPolitGroup.childs.filter(
      (p) => p.selected
    )[0];
    console.log(selectedPolitGroup); // Party
    console.log(selectedPerson); // Candidate - if any
    alert('GO TO PREVIEW COMPONENT...');
  }
}
