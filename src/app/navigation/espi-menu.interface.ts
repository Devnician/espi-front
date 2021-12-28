import { BehaviorSubject } from 'rxjs';

export interface EspiMenu {
  label: string;
  route: string;
  matIcon: string;
  badgeSubject: BehaviorSubject<number>;
}
