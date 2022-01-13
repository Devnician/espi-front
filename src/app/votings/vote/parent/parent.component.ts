import { Component, Input } from '@angular/core';
import { PolitGroup } from '../vote.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  @Input() group: PolitGroup;

  constructor() {}
}
