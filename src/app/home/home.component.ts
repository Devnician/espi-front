import { Component, OnInit } from '@angular/core';
import { SampleOutput } from 'src/generated/graphql';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  someObject: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  auth(): void {
    this.authService.callExpressLogin().subscribe((response) => {
      console.log(response);
      const fetchToken = response.data.token; // alabala
      this.someObject = response;
    });
  }

  auth2(): void {
    this.authService
      .callExpressThroughHasuraActions('pepe', '1234')
      .subscribe((response) => {
        const sampleOutput: SampleOutput = response.data.testAction;
        this.someObject = sampleOutput;
      });
  }
}
