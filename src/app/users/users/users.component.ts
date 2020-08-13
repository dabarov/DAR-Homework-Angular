import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { User } from 'src/app/shared/types';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users$: Observable<User[]>;

  searchInput = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.users$ = this.userService
      .getUsers()
      .pipe(
        map((users) =>
          users.filter((user) =>
            this.searchInput ? user.name.includes(this.searchInput) : users
          )
        )
      );
  }

  navigateToUser(id: number) {
    this.router.navigate(['/users', id]);
  }

  clearSearchInput() {
    this.searchInput = '';
    this.getData();
  }

  search() {
    console.log(this.searchInput);
    this.getData();
  }
}
