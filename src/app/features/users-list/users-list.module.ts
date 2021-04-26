import {NgModule} from '@angular/core';
import {UsersListComponent} from './users-list.component';
import {UsersListRoutingModule} from './users-list-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    UsersListRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: []
})
export class UsersListModule {
}
