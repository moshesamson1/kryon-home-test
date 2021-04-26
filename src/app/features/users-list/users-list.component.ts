import {Component, OnInit} from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.less']
})
export class UsersListComponent implements OnInit {

  constructor(public _userService: UsersService) {
  }

  ngOnInit(): void {
  }
}
