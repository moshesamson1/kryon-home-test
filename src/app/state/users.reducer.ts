import { createReducer, Action, on } from '@ngrx/store';

import { retrievedUserList, removeUser, UserActionTypes } from './users.actions';
import { User } from '../features/users-list/models/user';

export const initialState: {users:User[]} = {users:[]};

export const usersReducer = createReducer(
  initialState,
  on(retrievedUserList, (state, { }) => state),
  // on(removeUser, (state, { userId }) => {users:[...state.users.filter((id) => id !== userId)]})
);

