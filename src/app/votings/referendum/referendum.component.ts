import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
export interface Question {
  questionNumber: number;
  text: string;
  // response: string;
  completed: boolean;
  label: string;

  isPreview: boolean;
}

@Component({
  selector: 'app-referendum',
  templateUrl: './referendum.component.html',
  styleUrls: ['./referendum.component.scss'],
})
export class ReferendumComponent implements OnInit {
  // isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  questions: BehaviorSubject<Question[]> = new BehaviorSubject([]);
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const qu: Question[] = [];
    qu.push({
      questionNumber: 1,
      text: 'Текст на въпроса..',
      completed: false,
      label: 'brada',
      isPreview: false,
    });
    qu.push({
      questionNumber: 2,
      text: 'Текст на въпроса..',
      completed: false,
      label: 'brada',
      isPreview: false,
    });
    qu.push({
      questionNumber: 3,
      text: 'Текст на въпроса..',
      completed: false,
      label: 'brada',
      isPreview: false,
    });
    this.questions.next(qu);

    this.firstFormGroup = this.fb.group({
      address: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      address: ['', Validators.required],
    });
  }
}
