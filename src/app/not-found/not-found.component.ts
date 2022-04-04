import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
    const snackRef = this.snackBar.open(
      'На този адрес не е открито съдържание.',
      'ОК',
      { duration: 3500 }
    );
    snackRef.afterDismissed().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
