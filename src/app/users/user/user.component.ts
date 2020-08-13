import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SingleUser } from 'src/app/shared/types';
import { UserService } from '../services/user.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user: SingleUser;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(mergeMap((param) => this.userService.getUser(param.id)))
      .subscribe((user) => (this.user = user));
  }
}
