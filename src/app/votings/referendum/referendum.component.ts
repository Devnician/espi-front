import { Component, Injector, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { LoggedUser } from 'src/app/auth/logged-user.interface';
import { VixenComponent } from 'src/app/core/vixen/vixen.component';
import { Donkey } from 'src/app/services/donkey.service';
import {
  Referendums,
  Referendum_Votes_Insert_Input,
} from 'src/generated/graphql';
import { VotingsService } from '../voting-service.service';
import { CustomReferendumQuestion } from './custom-referendum.class';

export interface Question {
  questionNumber: number; // !NOTE - zero is last page
  text: string;
  label: string;
  isPreview: boolean;
  response: number;
}

@Component({
  selector: 'app-referendum',
  templateUrl: './referendum.component.html',
  styleUrls: ['./referendum.component.scss'],
})
export class ReferendumComponent extends VixenComponent implements OnInit {
  questions: BehaviorSubject<CustomReferendumQuestion[]> = new BehaviorSubject(
    []
  );
  private done: BehaviorSubject<boolean> = new BehaviorSubject(false);
  done$ = this.done.asObservable();
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  referendum: Referendums;
  constructor(
    private votingsService: VotingsService,
    private donkey: Donkey,
    private snackBar: MatSnackBar,
    protected injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
    //this.id = +this.activatedRoute.snapshot.paramMap.get("id");
    if (this.donkey.isLoaded()) {
      this.referendum = this.donkey.unload();
      this.showReferendumToUSer(this.referendum);
    } else {
      history.back();
    }
  }

  private showReferendumToUSer(referendum: Referendums) {
    const preparedQuestions: CustomReferendumQuestion[] = [];
    referendum.referendumQuestions.forEach((q) => {
      let counter = 1;
      const newQ = _.cloneDeep(q) as CustomReferendumQuestion;
      newQ.questionNumber = counter++;
      newQ.response = -1; // await 1 or 0\
      preparedQuestions.push(newQ);
    });
    // add and preview page
    preparedQuestions.push({
      questionNumber: 0,
    } as CustomReferendumQuestion);
    this.questions.next(preparedQuestions);
  }

  check() {
    this.questions.subscribe((res) => {
      const result = res.filter(
        (q) => q.questionNumber > 0 && q.response < 0
      ).length;
      this.done.next(result === 0);
    });
  }
  vote() {
    let user: LoggedUser;
    let roleIndex: number;
    this.subscriptions.push(
      this.user$.subscribe((u) => {
        user = u;
      }),
      this.currentRoleIndex$.subscribe((i) => {
        roleIndex = i;
      })
    );

    const referendumVotes: Referendum_Votes_Insert_Input[] = [];
    this.questions.value.forEach((customQuestion) => {
      if (customQuestion.questionNumber > 0) {
        referendumVotes.push({
          questionId: customQuestion.id,
          eVote:
            customQuestion.response === 1
              ? true
              : customQuestion.response === 0
              ? false
              : undefined,
          userId: user.id,
        });
      }
    });

    this.votingsService
      .addVoteForReferendum(referendumVotes)
      .subscribe((response) => {
        if (response.data) {
          const affected = response.data.insert_referendum_votes.affected_rows;

          this.snackBar
            .open('Вие гласувахте успешно.', 'Разбрах', {})
            .afterDismissed()
            .subscribe(() => {
              console.log('Redirect to somewhere...');
              history.back();
            });
        }
        if (response.errors) {
          if (response.errors[0].message.includes('mutation_root')) {
            const roleLabel =
              roleIndex === 0
                ? user.roleType.description
                : user.secondRoleType.description;

            this.snackBar.open(
              `Нямата права за извършване на това действие. Влезли сте като :  "${roleLabel}"`,
              'Разбрах',
              {}
            );
          }
        }
      });
  }
}
