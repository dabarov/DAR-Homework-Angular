import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, SingleUser } from 'src/app/shared/types';
import { catchError } from 'rxjs/operators';
import { of, Observable, throwError } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        catchError((err) => {
          console.log('Error trying get Users', err);
          return of([]);
        })
      );
  }

  getUser(id: number): Observable<SingleUser> {
    return this.httpClient
      .get<SingleUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .pipe(
        catchError((err) => {
          console.log('Error trying get Users', err);
          return throwError(err);
        })
      );
  }
}
