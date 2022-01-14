import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'is-what';
import { BehaviorSubject } from 'rxjs';
import { Donkey } from 'src/app/services/donkey.service';
import { Candidate, PolitGroup } from '../vote.component';

@Component({
  selector: 'app-vote-preview',
  templateUrl: './vote-preview.component.html',
  styleUrls: ['./vote-preview.component.scss'],
})
export class VotePreviewComponent implements OnInit {
  selectedPolitGroup: BehaviorSubject<PolitGroup> = new BehaviorSubject(
    undefined
  );
  selectedCandidate: BehaviorSubject<Candidate> = new BehaviorSubject(
    undefined
  );

  constructor(private donkey: Donkey, private router: Router) {}

  ngOnInit(): void {
    if (this.donkey.isLoaded()) {
      const cargo = this.donkey.unload();
      this.selectedPolitGroup.next(cargo.selectedPolitGroup);
      const selectedPerson: Candidate = cargo.selectedPolitGroup.childs.filter(
        (p) => p.selected
      )[0];
      this.selectedCandidate.next(selectedPerson); // Candidate - if any
    } else {
      this.router.navigateByUrl('/votings');
    }
  }
  canVote(): boolean {
    return isNullOrUndefined(this.selectedPolitGroup.value);
  }
  vote() {
    console.log(this.selectedPolitGroup.value);
    console.log(this.selectedCandidate.value);
  }
}
