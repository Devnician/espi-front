import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidate } from '../vote.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() candidates: Candidate[];
  @Output() childEmiter = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  doSomeAction() {
    // emit:   this.childEmiter.emit( 'something');
  }
}
