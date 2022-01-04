import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'is-what';
import { BehaviorSubject } from 'rxjs';
import { Valido } from 'src/app/core/valido';
import { VixenComponent } from 'src/app/core/vixen/vixen.component';
import { AuthService } from 'src/app/services/auth-service';
import { LoginOutput } from 'src/generated/graphql';

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

  constructor(
    private fb: FormBuilder,
    public valido: Valido,
    private auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    super(valido);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      egn: [
        '8080808080', // null,
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{10}'),
        ]),
      ],
      password: [
        'asd123A-', //null,
        this.valido.validatePassowrd(6, 50),
      ],
    });
  }

  loginUser() {
    this.loading.next(true);
    this.loginForm.disable();
    console.log('LOGIN');
    if (this.loginForm.invalid) {
      this.valido.validateAllFormFields(this.loginForm);
      return;
    }
    const formData = this.loginForm.value;
    formData.egn = formData.egn.toString();

    this.auth
      .loginAction({ password: formData.password, egn: formData.egn })
      .subscribe((response) => {
        const output: LoginOutput = response.data.LoginAction;
        console.log(output);
        if (isNullOrUndefined(output.accessToken)) {
          this.snackBar.open('Невалидни удостоверения', 'ОК', {
            duration: 5000,
          });
        } else {
          this.auth.setToken(output.accessToken);
          localStorage.setItem('access_token', output.accessToken);
          localStorage.setItem('fetch_token', output.fetchToken);
          this.router.navigateByUrl('/');
        }
        this.loginForm.enable();
        this.loading.next(false);
      });
  }

  resetPassword(): void {
    console.log('RESET PASS');
  }
}
