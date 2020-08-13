import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [UsersComponent, UserComponent],
  exports: [UsersComponent, UserComponent],
  providers: [UserService],
})
export class UsersModule {}
