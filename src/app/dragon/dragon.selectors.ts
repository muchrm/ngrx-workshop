import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromDragon from './dragon.reducer'

export const selectFeature = (state: fromDragon.State) => state;

export const selectHitPoint = createSelector(
  selectFeature,
  (state: fromDragon.State) => state.hitPoint
);
