import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Valido } from 'src/app/core/valido';
import { VixenComponent } from 'src/app/core/vixen/vixen.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends VixenComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly loading$ = this.loading.asObservable();

  constructor(private fb: FormBuilder, public valido: Valido) {
    super(valido);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [null, this.valido.validatePassowrd(6, 50)],
    });
  }

  loginUser() {
    console.log('LOGIN');
  }

  resetPassword(): void {
    console.log('RESET PASS');
  }
}
