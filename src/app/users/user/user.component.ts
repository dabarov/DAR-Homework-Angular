import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SingleUser } from 'src/app/shared/types';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user: SingleUser;
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params && params.id) {
        this.httpClient
          .get<SingleUser>(
            `https://jsonplaceholder.typicode.com/users/${params.id}`
          )
          .subscribe((user) => (this.user = user));
      }
    });
  }
}
