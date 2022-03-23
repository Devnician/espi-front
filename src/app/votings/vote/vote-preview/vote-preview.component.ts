import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'is-what';
import { BehaviorSubject } from 'rxjs';
import { Donkey } from 'src/app/services/donkey.service';
import { Votes, Votes_Insert_Input } from 'src/generated/graphql';
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
  private votingId: number;

  private oldVote: Votes;
  /**
   *
   * @param donkey
   * @param router
   * @param votingService
   * @param snackBar
   */
  constructor(
    private donkey: Donkey,
    private router: Router,
    private votingService: VotingsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.donkey.isLoaded()) {
      const payload = this.donkey.unload();

      this.selectedPolitGroup = payload.selectedPolitGroup;
      this.votingId = payload.votingId;
      this.oldVote = payload.oldVote;
      if (this.selectedPolitGroup.num > 0) {
        const selectedPerson: Candidate =
          payload.selectedPolitGroup?.candidates.filter(
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

    const voteInput: Votes_Insert_Input = {
      inSection: false,
      voteGroupId,
      voteUserId,
      votingId: this.votingId,
    };
    if (this.oldVote) {
      voteInput.id = this.oldVote.id;
    }
    this.votingService.vote([voteInput]).subscribe((response) => {
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
        snackRef = this.snackBar.open(
          'Вие ' +
            (this.oldVote ? 'променихте гласа си' : 'гласувахте') +
            '  успешно!',
          'Разбрах',
          {}
        );
      }
      snackRef.afterDismissed().subscribe((data) => {
        this.loading.next(false);
        this.router.navigate(['votings', 'dashboard']);
      });
    });
  }
}
