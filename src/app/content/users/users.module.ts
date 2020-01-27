import {NgModule} from '@angular/core';
import {UserDetailsComponent} from './user-details/user-details.component';
import {CommonModule} from '@angular/common';
import {UsersListComponent} from './users-list/users-list.component';
import {UserComponent} from './users-list/user/user.component';
import {UsersComponent} from './users.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {UsersRoutingModule} from './users-routing.module';
import {PaginationPipe} from './pipes/pagination.pipe';
import { PaginationComponent } from './users-list/pagination/pagination.component';
import {PaginationService} from './users-list/pagination/services/pagination.service';
import { AddUserComponent } from './users-list/add-user/add-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AddUserService} from './users-list/add-user/services/add-user.service';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    UserDetailsComponent,
    UsersListComponent,
    UserComponent,
    UsersComponent,
    PaginationPipe,
    PaginationComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule,
    SharedModule
  ],
  exports: [

  ],
  providers: [
    PaginationService,
    AddUserService
  ]
})

export class UsersModule {
  constructor() {}

}
