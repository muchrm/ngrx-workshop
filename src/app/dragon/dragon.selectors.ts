import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromDragon from './dragon.reducer'
import * as fromApp from '../reducers'

export const selectFeature = (state: fromApp.State) => state.dragon;

export const selectHitPoint = createSelector(
  selectFeature,
  (state: fromDragon.State) => state.hitPoint
);
