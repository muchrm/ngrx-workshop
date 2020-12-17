import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromHero from './hero.reducer'

export const selectFeature = (state: fromHero.State) => state;

export const selectAtkPower = createSelector(
  selectFeature,
  (state: fromHero.State) => state.atkPower
);
