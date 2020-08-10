import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/types';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user: User;
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params && params.id) {
        this.httpClient
          .get<User>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
          .subscribe((user) => (this.user = user));
      }
    });
  }
}
