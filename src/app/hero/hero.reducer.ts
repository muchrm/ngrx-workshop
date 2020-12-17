import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './hero.actions'

export const heroFeatureKey = 'hero';

export interface State {
  hitPoint:number,
  atkPower:number,
  ammor:number,
}

export const initialState: State = {
  hitPoint:100,
  atkPower:20,
  ammor:5,
};


const heroReducer = createReducer(
  initialState
);

export function reducer(state: State | undefined, action: Action){
  return heroReducer(state,action);
}
