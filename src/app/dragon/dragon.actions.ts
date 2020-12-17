import { createAction, props } from '@ngrx/store';

export const receiveDamage = createAction(
  '[Dragon] Receive Damage',
  props<{ damage: number }>()
);




