import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
// fake interfaces

export interface Candidate {
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
  selected = new FormControl(0);
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
        childs.push({ firstName: 'Dragan', lastName: 'Petkov' });
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
}
