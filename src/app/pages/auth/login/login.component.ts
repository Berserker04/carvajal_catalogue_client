import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = this.formBuilder.nonNullable.group({
    email: ['client@example.com', [Validators.email, Validators.required]],
    password: ['client123', [Validators.minLength(6), Validators.required]],
  });

  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  login(): void {
    if (this.form.valid) {
      this.loading = true;
      const { email, password } = this.form.getRawValue();
      console.log(email);
      console.log(password);

      this.authService.login(email, password).subscribe({
        next: ({ data }: any) => {
          localStorage.setItem('token', data.jwtToken);
          this.router.navigate(['/']);
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {
          this.loading = false;
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
