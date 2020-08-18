import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../../shared/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form: FormGroup;

  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  register() {
    if (this.form.invalid) {
      return;
    }

    this.errorMessage = '';

    this.authService
      .register(
        this.form.get('username').value,
        this.form.get('password').value
      )
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.message ? err.error.message : err.message;
          this.form.get('username').setValue('');
          this.form.get('password').setValue('');
          this.form.reset();
          return EMPTY;
        })
      )
      .subscribe((res) => {
        this.router.navigate(['/auth/login']);
      });
  }
}
