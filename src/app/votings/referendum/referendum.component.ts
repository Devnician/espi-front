import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
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
export class ReferendumComponent implements OnInit {
  questions: BehaviorSubject<Question[]> = new BehaviorSubject([]);
  private done: BehaviorSubject<boolean> = new BehaviorSubject(false);

  done$ = this.done.asObservable();
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const qu: Question[] = [];
    qu.push({
      questionNumber: 1,
      text: 'Текст на въпроса..',
      label: 'label',
      isPreview: false,
      response: -1,
    });
    qu.push({
      questionNumber: 2,
      text: 'Текст на въпроса..',

      label: '?',
      isPreview: false,
      response: -1,
    });
    qu.push({
      questionNumber: 3,
      text: 'Текст на въпроса..',

      label: 'label',
      isPreview: false,
      response: -1,
    });
    qu.push({
      questionNumber: 0,
      text: '',

      label: 'label',
      isPreview: true,
      response: -1,
    });
    this.questions.next(qu);
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
    // referendum result
    console.log(this.questions.value);
    this.loading.next(true);
    setTimeout(() => {
      this.loading.next(false);
      // alabala
    }, 2000);

    // alert(JSON.stringify(this.questions.value));
    // this.loading.next(false);
  }
}
