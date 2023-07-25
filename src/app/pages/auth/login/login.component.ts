import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(6), Validators.required]],
  });

  loading: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  login(): void {
    if (this.form.valid) {
      this.loading = true;
      const { email, password } = this.form.getRawValue();
      console.log(email);
      console.log(password);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
