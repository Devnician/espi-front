import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'is-what';
import { Donkey } from 'src/app/services/donkey.service';
import { Candidate, PolitGroup } from '../vote.component';

@Component({
  selector: 'app-vote-preview',
  templateUrl: './vote-preview.component.html',
  styleUrls: ['./vote-preview.component.scss'],
})
export class VotePreviewComponent implements OnInit {
  selectedPolitGroup: PolitGroup;
  selectedCandidate: Candidate;
  constructor(private donkey: Donkey, private router: Router) {}

  ngOnInit(): void {
    if (this.donkey.isLoaded()) {
      const cargo = this.donkey.unload();
      this.selectedPolitGroup = cargo.selectedPolitGroup;
      console.log(this.selectedPolitGroup);
      const selectedPerson: Candidate =
        cargo.selectedPolitGroup?.candidates.filter(
          (p) => p.selected === true
        )[0];
      this.selectedCandidate = selectedPerson; // Candidate - if any
    } else {
      this.router.navigateByUrl('/votings');
    }
  }
  canVote(): boolean {
    return isNullOrUndefined(this.selectedPolitGroup);
  }
  goBack() {
    history.back();
  }
  vote() {
    console.log(this.selectedPolitGroup);
    console.log(this.selectedCandidate);
  }
}
