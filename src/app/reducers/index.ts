import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromHero from '../hero/hero.reducer';
import * as fromDragon from '../dragon/dragon.reducer';


export interface State {
  [fromHero.heroFeatureKey]: fromHero.State;
  [fromDragon.dragonFeatureKey]: fromDragon.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromHero.heroFeatureKey]: fromHero.reducer,
  [fromDragon.dragonFeatureKey]: fromDragon.reducer,
};

export function debug(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug] : [];
