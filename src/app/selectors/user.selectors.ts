import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';

const getUserFeatureState = createFeatureSelector<fromUser.State>(fromUser.userFeatureKey);


export const selectUsers = createSelector(
  getUserFeatureState,
  state => state.users
);

export const selectSelectedUserName = createSelector(
  getUserFeatureState,
  state => state.selectedUserName
);

export const selectSelectedUser = createSelector(
  getUserFeatureState,
  state => state.users.find(user => user.name === state.selectedUserName)
);
