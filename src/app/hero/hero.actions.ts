import { createAction, props } from '@ngrx/store';

export const attactDragon = createAction(
  '[Hero] Attact Dragon',
  props<{ addAttact: number }>()
);

export const attactDragonSuccess = createAction(
  '[Hero] Attact Dragon Success'
);

export const attactDragonFailure = createAction(
  '[Hero] Attact Dragon Failure'
);
