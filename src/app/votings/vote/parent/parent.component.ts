import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PolitGroup } from '../vote.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  @Input() group: PolitGroup;
  @Output() parentEmiter = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
}
