import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserDetailResolver } from './services/userDetail.resolver';
import { UserFormComponent } from './user-form/user-form.component';

const routes = [
  {
    path: ':id',
    component: UserComponent,
    resolve: {
      user: UserDetailResolver,
    },
  },
  {
    path: 'form/:id',
    component: UserFormComponent,
    resolve: {
      user: UserDetailResolver,
    },
  },
  {
    path: '',
    component: UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
