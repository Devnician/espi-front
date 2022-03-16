import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'is-what';
import { BehaviorSubject } from 'rxjs';
import { Donkey } from 'src/app/services/donkey.service';
import { Votes_Insert_Input } from 'src/generated/graphql';
import { VotingsService } from '../../voting-service.service';
import { Candidate, PolitGroup } from '../vote.component';

@Component({
  selector: 'app-vote-preview',
  templateUrl: './vote-preview.component.html',
  styleUrls: ['./vote-preview.component.scss'],
})
export class VotePreviewComponent implements OnInit {
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();
  selectedPolitGroup: PolitGroup;
  selectedCandidate: Candidate;
  private votingId;
  constructor(
    private donkey: Donkey,
    private router: Router,
    private votingService: VotingsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.donkey.isLoaded()) {
      const cargo = this.donkey.unload();
      this.selectedPolitGroup = cargo.selectedPolitGroup;
      this.votingId = cargo.votingId;
      if (this.selectedPolitGroup.num > 0) {
        console.log(this.selectedPolitGroup);
        const selectedPerson: Candidate =
          cargo.selectedPolitGroup?.candidates.filter(
            (p) => p.selected === true
          )[0];
        this.selectedCandidate = selectedPerson; // Candidate - if any
      }
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
    this.loading.next(true);
    const voteGroupId =
      this.selectedPolitGroup.politGroupId === 0
        ? null
        : this.selectedPolitGroup.politGroupId;
    const voteUserId = this.selectedCandidate?.userId; // !!!

    console.log(this.selectedPolitGroup);
    console.log(this.selectedCandidate);

    const voteInput: Votes_Insert_Input = {
      inSection: false,
      voteGroupId,
      voteUserId,
      votingId: this.votingId,
    };
    this.votingService.vote(voteInput).subscribe((response) => {
      let snackRef;
      if (response.errors) {
        console.log(response.errors);
        if (response.errors[0].message.includes('mutation_root')) {
          snackRef = this.snackBar.open(
            `Нямата права за извършване на това действие. Свържете се с администратор"`,
            'Разбрах',
            {}
          );
        } else if (response.errors[0].message.includes('niqueness')) {
          snackRef = this.snackBar.open(
            `Вие вече сте дали гласа си за този избор.`,
            'Разбрах',
            {}
          );
        }
      } else {
        snackRef = this.snackBar.open('Вие гласувахте успешно!', 'Разбрах', {});
      }
      snackRef.afterDismissed().subscribe((data) => {
        this.loading.next(false);
        console.log(data);
        // if (data && data.dismissedByAction === true) {
        // redirect  redi
        this.router.navigate(['votings', 'dashboard']);
        // }
      });
    });
    console.log(voteInput);
  }
}
