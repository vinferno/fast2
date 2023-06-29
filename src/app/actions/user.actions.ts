import { createAction, props } from '@ngrx/store';
import { User } from '../reducers/user.reducer';

export const actionAddUser = createAction(
  '[User] Add Users'
  , props<{ user: User }>()
);

export const actionSelectUserByName = createAction(
  '[User] Select User By Name',
  props<{ name: string }>()
)



