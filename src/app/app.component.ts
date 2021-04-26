import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersService } from './features/users-list/services/users.service';
import { retrievedUserList } from './state/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kryon-home-test';

  constructor(private _users: UsersService, private _store:Store) {

  }

  ngOnInit(): void {
    this._users.getUsers().subscribe(usersData => {
      console.log('got data: users: ' + usersData.length)
        this._store.dispatch(retrievedUserList({users:usersData}))
    })
  }
}
