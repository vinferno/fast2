import { Action, createReducer, on } from '@ngrx/store';
import { actionAddUser, actionSelectUserByName } from '../actions/user.actions';

export interface User {
  name: string;
}
export const userFeatureKey = 'user';

export interface State {
  users: User[];
  selectedUserName: string | null;
}

export const initialState: State = {
  users: [],
  selectedUserName: null
};

export const reducer = createReducer(
  initialState,
  on(
    actionAddUser,
    (state, action) => ({
      ...state,
      users: [...state.users,action.user]
    })
    ),
    on(actionSelectUserByName,
    (state, action) => ({
      ...state,
      selectedUserName: action.name
    }))

);
