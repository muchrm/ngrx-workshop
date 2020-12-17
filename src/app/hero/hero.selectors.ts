import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromHero from './hero.reducer'


import * as fromApp from '../reducers'

export const selectFeature = (state: fromApp.State) => state.hero;

export const selectAtkPower = createSelector(
  selectFeature,
  (state: fromHero.State) => state.atkPower
);
