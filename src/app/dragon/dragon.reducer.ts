import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './dragon.actions'

export const dragonFeatureKey = 'dragon';

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


export const dragonReducer = createReducer(
  initialState,
  on(actions.receiveDamage,(state,{damage}) => ({...state,hitPoint:Math.max(0,state.hitPoint - Math.abs(Math.min(0,state.ammor - damage)))}))
);



export function reducer(state: State | undefined, action: Action){
  return dragonReducer(state,action);
}
