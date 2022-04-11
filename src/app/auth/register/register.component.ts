import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { VixenComponent } from 'src/app/core/vixen/vixen.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends VixenComponent implements OnInit {
  form: FormGroup;
  hide = false;
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly loading$ = this.loading.asObservable();
  private submitted: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly submitted$ = this.submitted.asObservable();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    protected injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      egn: [
        8003033333, // null,
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{10}'),
        ]),
      ],
      pin: [
        'HPFUBC6Z', // null,
        Validators.compose([
          Validators.required,
          Validators.pattern('[A-Z0-9]{8}'),
        ]),
      ],
      email: [
        'mail@mail.bg', // null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [
        'asd123A-', // null,
        this.valido.validatePassowrd(6, 50),
      ],
    });
  }

  registerUser() {
    if (this.form.invalid) {
      this.valido.validateAllFormFields(this.form);
      return;
    }
    const formData = this.form.value;
    formData.egn = formData.egn.toString();
    formData.pin = formData.pin.toString();
    this.form.disable();
    this.loading.next(true);
    this.submitted.next(true);
    this.authService.actionRegister(formData).subscribe((response) => {
      // console.log(response);
      if (response.data) {
        this.loading.next(false);
        const found = response.data.RegisterAction.found;
        //  console.log(found);
        if (found) {
          //   console.log(' redirect ');
          this.router.navigateByUrl('auth/register/success');
        } else {
          this.router.navigateByUrl('auth/register/fail');
        }
      }
    });
  }
}
