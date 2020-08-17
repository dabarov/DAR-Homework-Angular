import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (!this.username || !this.password) {
      return;
    }

    this.errorMessage = '';

    this.authService
      .register(this.username, this.password)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.message ? err.error.message : err.message;
          this.username = '';
          this.password = '';
          return EMPTY;
        })
      )
      .subscribe((res) => {
        this.router.navigate(['/auth/login']);
      });
  }
}
