import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from '../vote.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() candidates: Candidate[];
  constructor() {}

  ngOnInit(): void {}
}
