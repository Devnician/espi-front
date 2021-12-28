import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'is-what';
import { LoggedUser } from '../auth/logged-user.interface';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  someObject: any;
  constructor(private router: Router, private authService: AuthService) {}
  user: LoggedUser;

  ngOnInit(): void {
    if (isNullOrUndefined(this.user)) {
      this.router.navigate(['login']);
    }
  }

  auth(): void {
    this.authService.callExpressLogin().subscribe((response) => {
      console.log(response);
      const fetchToken = response.data.token; // alabala
      this.someObject = response;
    });
  }

  auth2(): void {
    // this.authService
    //   .callExpressThroughHasuraActions('pepe', '1234')
    //   .subscribe((response) => {
    //     const sampleOutput: SampleOutput = response.data.testAction;
    //     this.someObject = sampleOutput;
    //   });
  }
}
