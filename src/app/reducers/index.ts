import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from './user.reducer';
import * as fromTodos from './todos.reducer';


export interface State {

  [fromUser.userFeatureKey]: fromUser.State;
  [fromTodos.todosFeatureKey]: fromTodos.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromUser.userFeatureKey]: fromUser.reducer,
  [fromTodos.todosFeatureKey]: fromTodos.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
