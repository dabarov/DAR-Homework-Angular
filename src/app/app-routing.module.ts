import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'auth/register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
