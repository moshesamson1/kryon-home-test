import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';
import { Store } from '@ngrx/store';
import { retrievedUserList } from 'src/app/state/users.actions';
// import { RetrieveUserListAction } from 'src/app/state/users.actions';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly endpointUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private _store: Store) {
    console.log('UsersService initiated');
  }

  public getUsers(searchText?: string): Observable<User[]> {
    let _searchText = searchText ? `/${searchText}`:  "";
    return this.http.get<User[]>(`${this.endpointUrl}/users${_searchText}`)

  }

  public deleteUser(userId: string): Observable<void> {
    // Todo: Implement request to mock server
    return of();
  }
}
