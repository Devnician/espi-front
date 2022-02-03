import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { Donkey } from 'src/app/services/donkey.service';
import { Referendums, Referendum_Votes } from 'src/generated/graphql';
import { VotingsService } from '../voting-service.service';
import { CustomReferendumQuestion } from './custom-referendum.class';
@Component({
  selector: 'app-referendum',
  templateUrl: './referendum.component.html',
  styleUrls: ['./referendum.component.scss'],
})
export class ReferendumComponent implements OnInit {
  questions: BehaviorSubject<CustomReferendumQuestion[]> = new BehaviorSubject(
    []
  );
  private done: BehaviorSubject<boolean> = new BehaviorSubject(false);
  done$ = this.done.asObservable();
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  referendum: Referendums;
  constructor(
    private fb: FormBuilder,
    private votingsService: VotingsService,
    private donkey: Donkey
  ) {}

  ngOnInit() {
    // use Donkey
    if (this.donkey.isLoaded()) {
      // get
      const referefndum = this.donkey.unload();
      //  and show..
    }

    this.getReferendumFromSomewhere();
  }
  getReferendumFromSomewhere() {
    this.votingsService
      .DELETE_THIS_METHOD_getReferendums()
      .subscribe((response) => {
        if (response.data.referendums) {
          const all: Referendums[] = response.data.referendums as Referendums[];
          console.log(all);
          this.referendum = all[0];
          this.showReferendumToUSer(this.referendum);
        }
      });
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
    //     0:
    // createdAt: "2022-02-01T16:53:01.451691+00:00"
    // id: 17
    // question: "Въпрос"
    // questionNumber: 1
    // referendumId: 8
    // response: 1
    // updatedAt: "2022-02-01T16:57:31.998267+00:00"
    // __typename: "referendum_questions"

    const referendumVotes: Referendum_Votes[] = [];
    this.questions.value.forEach((customQuestion) => {
      // referendumVotes.push({referendumQuestionId: customQuestion.id, userId: ???});
    });

    // referendum result
    console.log(this.questions.value);
    // prepare vot from custom questions..
    // this.loading.next(true);
    // setTimeout(() => {
    //   this.loading.next(false);
    //   // alabala
    // }, 2000);

    // alert(JSON.stringify(this.questions.value));
    // this.loading.next(false);
  }
}
