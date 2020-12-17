import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as HeroActions from './hero.actions';
import * as DragonActions from '../dragon/dragon.actions';
import * as HeroReducer from './hero.reducer';
import { exhaustMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as HeroSelectors from './hero.selectors'
import * as fromApp from '../reducers'
@Injectable()
export class HeroEffects {
  constructor(
    private store: Store<fromApp.State>,
    private actions$: Actions
  ) {}

  attactDragon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroActions.attactDragon),
      withLatestFrom(this.store.select(HeroSelectors.selectAtkPower)),
      exhaustMap(([{ addAttact }, atkPower]) => {
        console.log(atkPower, addAttact)
        return [
        HeroActions.attactDragonSuccess(),
        DragonActions.receiveDamage({ damage: atkPower + addAttact }),
      ]
    })
    )
  );
}
