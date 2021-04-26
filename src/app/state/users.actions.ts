import { createAction, props, Action } from '@ngrx/store';
import { User } from '../features/users-list/models/user';

export const removeUser = createAction(
  '[User Collection] Remove Book',
  props<{ userId: number }>()
);

export const retrievedUserList = createAction(
  '[User List/API] Retrieve Users Success',
  props<{ users: User[] }>()
);

export enum UserActionTypes {
  REMOVE_USER = "REMOVE_USER",
  RETRIEVE_USER_LIST = "RETRIEVE_USER_LIST"
}

// export class RetrieveUserListAction implements Action {
//   type: string = UserActionTypes.RETRIEVE_USER_LIST

//   constructor(public payload: any) { }
// }

// export class RemoveUserAction implements Action {
//   type: string = UserActionTypes.REMOVE_USER;

//   constructor(public payload: any) { }

// }



// export type UserActions = RetrieveUserListAction | RemoveUserAction
